import { Link } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react'
import { getAgents } from '../services/agents'

export const Agents = () => {
  const { agents: agentsApi, isLoading } = getAgents()
  const [agents, setAgents] = useState(agentsApi?.data)
  const [name, setName] = useState('')
  const [filter, setFilter] = useState('')

  const roles = [...new Set(agentsApi?.data.map(data => data.role.displayName))];

  useEffect(() => {
    if (agentsApi?.data) {
      setAgents(agentsApi.data);
    }
  }, [agentsApi?.data]);

  function filterAgents(currentName: string, currentFilter: string) {
    let filteredAgents = agentsApi?.data

    console.log(filteredAgents)

    if (currentName.trim() !== '') {
      filteredAgents = filteredAgents?.filter(agent =>
        agent.displayName.toLowerCase().startsWith(currentName.toLowerCase())
      );
    }

    if (currentFilter.trim() !== '' && currentFilter !== 'All') {
      filteredAgents = filteredAgents?.filter(agent =>
        agent.role.displayName === currentFilter
      );
    }

    setAgents(filteredAgents);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    const newName = e.target.value;
    setName(newName);
    filterAgents(newName, filter);
  }

  function handleFilter(e: ChangeEvent<HTMLSelectElement>): void {
    const newRole = e.target.value;
    setFilter(newRole);
    filterAgents(name, newRole);
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <main className='bg-newBlack mx-2'>
      <form className="flex flex-col w-auto sm:flex-row md:flex-row lg:w-3/6" onSubmit={e => e.preventDefault()}>
        <div className="grid flex-grow p-5 card rounded-box place-items-center">
          <input type="text" placeholder="Gekko" className="input input-bordered w-full max-w-xs" value={name} onChange={handleSearch} />
        </div>
        <div className="grid flex-grow p-5 card rounded-box place-items-center">
          <select className="select select-bordered sm:w-3/12 md:w-3/6" onChange={handleFilter}>
            <option disabled value='Pick rol'>Pick role</option>
            <option value='All'>All</option>
            {
              roles.map(rol => (
                <option key={rol} value={rol}>{rol}</option>
              ))
            }
          </select>
        </div>
      </form >
      <div className="gap-3 bg-newBlack" style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(18rem,1fr))',
        gridTemplateRows: 'repeat(3,1fr)',
      }}>
        {
          agents && agents?.map(agent => (
            <Link to={`/agents/${agent.uuid}`} key={agent.uuid}>
              <div className='rounded-md' style={{
                backgroundImage: `url(${agent.background})`,
                background: `linear-gradient(90deg,
                  #${agent.backgroundGradientColors[0]} 0%,
                  #${agent.backgroundGradientColors[1]} 35%,
                  #${agent.backgroundGradientColors[2]} 63%,
                  #${agent.backgroundGradientColors[3]} 100%)`
              }}>
                <div className=" shadow-xl bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${agent.background})` }}>
                  <figure >
                    <img className='w-40' src={agent.displayIcon} />
                  </figure>
                </div>
              </div>
            </Link>
          ))
        }
      </div >
    </main>
  )
}