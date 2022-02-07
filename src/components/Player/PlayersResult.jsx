import { useContext, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import ApexContext from '../../context/apex/ApexContext'
import NotFound from '../../pages/NotFound'
import { searchPlayer } from '../../context/apex/ApexActions'
import { useParams } from 'react-router-dom'
import { FaRegChartBar, FaRegUserCircle, FaWindows } from 'react-icons/fa'
import ColumnOne from './ColumnOne'
import RankImage from './RankImage'
import { changeSeasonSplitString } from '../../js/changeSeasonSplitString'
import { checkEmptyObject } from '../../js/checkEmptyObject'

function PlayerResult() {
  const { dispatch, player, loading } = useContext(ApexContext)
  const params = useParams()
  useEffect(() => {
    const getServerStatus = async () => {
      dispatch({ type: 'SET_LOADING' })
      dispatch({ type: 'SET_PLAYER', payload: params.login })
      const userData = await searchPlayer(params.login)
      dispatch({ type: 'GET_PLAYER', payload: userData })
    }
    getServerStatus()
  }, [dispatch, params.login])

  if (loading || checkEmptyObject(player)) {
    return <Spinner />
  } else if (
    player === 'Request failed with status code 404' ||
    player.hasOwnProperty('Error') ||
    player.global === undefined
  ) {
    return <NotFound notFoundText={'Request failed. Player not found'} />
  } else {
    console.log(player)
    return (
      <>
        {!checkEmptyObject(player) && (
          <div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 text-center align-items-center">
              <div>
                <img
                  className="mx-auto md:ml-auto md:mr-0 w-3/4 sm: w-7/12"
                  src={player.legends.selected.ImgAssets.icon}
                  alt=""
                />{' '}
              </div>
              <div className="md:text-left sm:text-center text-5xl">
                <h1>{player.global.name}</h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3">
              {console.log(player.legends.selected.LegendName)}
              <ColumnOne
                row1={<FaRegUserCircle className="mr-4 text-3xl" />}
                row2={'Current Legend'}
                row3={player.legends.selected.LegendName.toString()}
              />
              <ColumnOne
                row1={<FaRegChartBar className="mr-4 text-3xl" />}
                row2={'Level'}
                row3={player.global.level.toString()}
              />
              <ColumnOne
                row1={<FaWindows className="mr-4 text-3xl" />}
                row2={'Platform'}
                row3={player.global.platform}
              />
            </div>
            <div className="grid grid-cols-1 mt-6 mb-6 text-center text-4xl">
              <h3>
                Rank for{' '}
                {changeSeasonSplitString(player.global.rank.rankedSeason)}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3">
              <ColumnOne
                row1={<RankImage img={player.global.rank.rankImg} />}
                row2={'Rank'}
                row3={player.global.rank.rankName.toString()}
              />
              <ColumnOne
                row1={<RankImage img={player.global.rank.rankImg} />}
                row2={'Rank Division'}
                row3={player.global.rank.rankDiv.toString()}
              />
              <ColumnOne
                row1={<RankImage img={player.global.rank.rankImg} />}
                row2={'Rank Score'}
                row3={player.global.rank.rankScore.toString()}
              />
            </div>
            <div className="grid grid-cols-1 "></div>
          </div>
        )}
      </>
    )
  }
}

export default PlayerResult
