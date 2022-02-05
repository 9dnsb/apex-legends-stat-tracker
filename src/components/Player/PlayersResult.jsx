import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import ApexContext from '../../context/apex/ApexContext'
import NotFound from '../../pages/NotFound'

function PlayerResult() {
  const { player, loading } = useContext(ApexContext)
  const ifPlayerFilled =
    player &&
    Object.keys(player).length === 0 &&
    Object.getPrototypeOf(player) === Object.prototype

  if (
    player === 'Request failed with status code 404' ||
    player.hasOwnProperty('Error')
  ) {
    return <NotFound notFoundText={'Request failed. Player not found'} />
  } else if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {console.log(player)}
        {!ifPlayerFilled && <h1>Player Name: {player.global.name}</h1>}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default PlayerResult
