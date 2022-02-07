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
        <p>Current Map: {mapRotation.battle_royale.current.map}</p>
      </>
    )
  }
}

export default MapRotation
