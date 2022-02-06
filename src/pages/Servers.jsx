import ApexContext from '../context/apex/ApexContext'
import { searchServers } from '../context/apex/ApexActions'
import { useContext, useEffect } from 'react'
import Spinner from '../components/layout/Spinner'
import ServerTypeSection from '../components/servers/ServerTypeSection'
import NotFound from './NotFound'
import PageHeader from '../components/layout/PageHeader'

function Servers() {
  const { dispatch, servers, loading } = useContext(ApexContext)

  useEffect(() => {
    const getServerStatus = async () => {
      dispatch({ type: 'SET_LOADING' })

      const userData = await searchServers()
      dispatch({ type: 'GET_SERVERS', payload: userData })
    }
    getServerStatus()
  }, [dispatch])

  if (loading || Object.keys(servers).length === 0) {
    return (
      <>
        <PageHeader title={'Apex Server'} />
        <Spinner />
      </>
    )
  } else if (servers === 'Network Error') {
    return <NotFound notFoundText={'There was a network error'} />
  } else {
    return (
      <>
        <PageHeader title={'Apex Server'} />
        <ServerTypeSection />
      </>
    )
  }
}

export default Servers
