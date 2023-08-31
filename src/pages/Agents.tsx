import { Link } from 'react-router-dom'
import agents from '../mocks/agents.json'

export const Agents = () => {
  console.log(agents)
  const { data } = agents

  return (
    <div className="gap-3 m-4 bg-newBlack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(18rem,1fr))', gridTemplateRows: 'repeat(3,1fr)', }}>
      {
        data.map(agent => (
          <Link to={`/agents/${agent.uuid}`} key={agent.uuid}>
            <div className='rounded-md' style={{
              backgroundImage: `url(${agent.background})`,
              background: `linear-gradient(90deg, #${agent.backgroundGradientColors[0]} 0%, #${agent.backgroundGradientColors[1]} 35%, #${agent.backgroundGradientColors[2]} 63%, #${agent.backgroundGradientColors[3]} 100%)`
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
  )
}
