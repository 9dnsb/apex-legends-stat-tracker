import { useContext, useEffect } from 'react'
import NotFound from '../pages/NotFound'
import Spinner from '../components/layout/Spinner'
import { searchMap } from '../context/apex/ApexActions'
import ApexContext from '../context/apex/ApexContext'
import PageHeader from '../components/layout/PageHeader'
import { checkEmptyObject } from '../js/checkEmptyObject'

function MapRotation() {
  const { dispatch, mapRotation, loading } = useContext(ApexContext)
  useEffect(() => {
    const getServerStatus = async () => {
      dispatch({ type: 'SET_LOADING' })
      const userData = await searchMap()
      dispatch({ type: 'GET_MAP', payload: userData })
    }
    getServerStatus()
  }, [dispatch])
  if (loading || checkEmptyObject(mapRotation)) {
    return <Spinner />
  } else if (
    mapRotation === 'Request failed with status code 404' ||
    mapRotation.hasOwnProperty('Error')
  ) {
    return <NotFound notFoundText={'Request failed. Map data not found'} />
  } else {
    console.log(mapRotation)
    return (
      <>
        <PageHeader title={'Map Rotation'} />
        <div className="mt-4 grid sm:grid-rows-4 sm:grid-flow-col gap-4">
          <div className="sm:col-span-2 place-self-center sm:text-2xl"></div>
          <div className="sm:row-span-1 sm:col-span-2 place-self-center sm:text-2xl">
            <h2>Current Mah2: {mapRotation.battle_royale.current.map}</h2>
          </div>
          <div className="sm:col-span-2 place-self-center sm:text-2xl">
            <h2>
              Remaining Time: {mapRotation.battle_royale.current.remainingTimer}
            </h2>
          </div>

          <div className="sm:row-span-4 sm:col-span-1 place-self-center">
            <img
              src={mapRotation.battle_royale.current.asset}
              alt=""
              className="sm:w-9/12 sm:mx-auto sm:align-items-center"
            />
          </div>
        </div>
      </>
    )
  }
}

export default MapRotation
