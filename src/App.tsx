import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Agents } from './pages/Agents'
import { PageLayout } from './pages/PageLayout'
import { Buddies } from './pages/Buddies'
import { Gamemodes } from './pages/Gamemodes'
import { Maps } from './pages/Maps'
import { Weapons } from './pages/Weapons'
import { AgentDetail } from './pages/AgentDetail'
import { SWRConfig } from 'swr'
class LocalStorageCache extends Map<string, any> {
  constructor(initialData?: readonly (readonly [string, any])[] | null) {
    super(initialData);
  }

  keys(): IterableIterator<string> {
    return super.keys() as IterableIterator<string>;
  }
}

function localStorageProvider() {
  const map = new LocalStorageCache(JSON.parse(localStorage.getItem('app_cahe') || '[]'));

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app_cache', appCache);
  });

  return map;
}
function App() {
  return (
    <BrowserRouter>
      <SWRConfig value={{ revalidateOnFocus: false, provider: localStorageProvider }}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/agents/:uuid' element={<AgentDetail />} />
            <Route path='/buddies' element={<Buddies />} />
            <Route path='/gamemodes' element={<Gamemodes />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/weapons' element={<Weapons />} />
          </Route>
        </Routes>
      </SWRConfig>
    </BrowserRouter >
  )
}

export default App
