import ApexContext from '../context/apex/ApexContext'
import { searchServers } from '../context/apex/ApexActions'
import { useContext, useEffect } from 'react'
import Spinner from '../components/layout/Spinner'
import ServerTypeSection from '../components/servers/ServerTypeSection'
import NotFound from './NotFound'

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

  const header = (
    <div>
      <h1 className="text-3xl font-bold mb-5 mt-5 text-center">
        Apex Server Stats
      </h1>
    </div>
  )

  if (loading || Object.keys(servers).length === 0) {
    return (
      <>
        {header}
        <Spinner />
      </>
    )
  } else if (servers === 'Network Error') {
    return <NotFound notFoundText={'There was a network error'} />
  } else {
    return (
      <>
        {header}
        <ServerTypeSection />
      </>
    )
  }
}

export default Servers
