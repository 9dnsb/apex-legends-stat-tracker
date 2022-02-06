import NavBar from './components/layout/NavBar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/layout/Footer'
import Servers from './pages/Servers'
import { ApexProvider } from './context/apex/ApexContext'
import NotFound from './pages/NotFound'
import Players from './pages/Players'
import { AlertProvider } from './context/alert/AlertContext'
import PlayerResult from './components/Player/PlayersResult'
import MapRotation from './pages/MapRotation'

function App() {
  return (
    <ApexProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <NavBar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/servers" element={<Servers />} />
                <Route path="/playersearch" element={<Players />} />
                <Route path="/maprotation" element={<MapRotation />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/playersearch/:login" element={<PlayerResult />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </ApexProvider>
  )
}

export default App
