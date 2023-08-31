import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Agents } from './pages/Agents'
import { PageLayout } from './pages/PageLayout'
import { Buddies } from './pages/Buddies'
import { Gamemodes } from './pages/Gamemodes'
import { Maps } from './pages/Maps'
import { Weapons } from './pages/Weapons'
import { AgentsDetail } from './pages/AgentsDetail'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/agents/:uuid' element={<AgentsDetail />} />
          <Route path='/buddies' element={<Buddies />} />
          <Route path='/gamemodes' element={<Gamemodes />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/weapons' element={<Weapons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
