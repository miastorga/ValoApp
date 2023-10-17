import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Agents } from './pages/Agents'
import { PageLayout } from './pages/PageLayout'
import { Maps } from './pages/Maps'
import { Weapons } from './pages/Weapons'
import { AgentDetail } from './pages/AgentDetail'
import { SWRConfig } from 'swr'

function App() {
  return (
    <BrowserRouter >
      <SWRConfig value={{ revalidateOnFocus: false }}>
        <Routes >
          <Route element={<PageLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/agents/:uuid' element={<AgentDetail />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/weapons' element={<Weapons />} />
          </Route>
        </Routes>
      </SWRConfig>
    </BrowserRouter >
  )
}

export default App
