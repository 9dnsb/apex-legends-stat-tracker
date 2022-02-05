import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className="text-6xl mb-4">Apex Stat Tracker</h1>

      <p className="mb-4 text-2xl font-light">
        A website to track the most update information about Apex Legends and
        view player statistics
      </p>
      <div className="grid  gap-8  grid-cols-2  xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 ">
        <Link to={`/servers`}>
          <button className="btn btn-outline" aria-pressed="true">
            Check Servers
          </button>
        </Link>
        <Link to={`/playersearch`}>
          <button className="btn btn-outline" aria-pressed="true">
            Search Players
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
