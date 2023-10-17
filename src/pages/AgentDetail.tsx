import { useParams } from 'react-router-dom'
import React from 'react'
import { getAgent } from '../services/agents'

export const AgentDetail = () => {
  const { uuid } = useParams()
  const { agent, isLoading } = getAgent(uuid)

  if (isLoading) {
    return <div className="loading loading-spinner loading-lg neutral" ></div>
  }
  return (
    <div className="flex flex-col w-full lg:flex-row gap-1 p-1 bg-newBlack" style={{ background: 'black' }}>
      <div className="grid flex-grow card w-full" style={{
        backgroundImage: `url(${agent?.data.background})`,
        background: `linear-gradient(90deg,
                  #${agent?.data.backgroundGradientColors[0]} 0%,
                  #${agent?.data.backgroundGradientColors[1]} 35%,
                  #${agent?.data.backgroundGradientColors[2]} 63%,
                  #${agent?.data.backgroundGradientColors[3]} 100%)`
      }}>
        <div className='flex justify-evenly w-full h-[90%]'>
          <div className='h-full w-full flex justify-center bg-center bg-no-repeat bg-contain' style={{ backgroundImage: `url(${agent?.data.background})` }}>
            <img className='h-full' src={agent?.data.fullPortraitV2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-grow card bg-base-300 w-full p-2" style={{ background: 'black' }}>
        <div className='text-center'>
          <div className='flex gap-4 justify-center mb-2'>
            <p className='text-4xl' style={{ color: 'white' }}>{agent?.data.displayName}</p>
            <img className='w-10' src={agent?.data.role.displayIcon} alt="" />
          </div>
          <p style={{ color: 'white' }}>{agent?.data.description}</p>
        </div>
        <div>
          <p className='text-3xl text-center m-5' style={{ color: 'white' }}>Abilities</p>
          <div className='carousel w-full'>
            {
              agent?.data.abilities.map((a, idx) => (
                <React.Fragment key={idx}>
                  <div className="card w-full carousel-item relative " id={`slide${idx + 1}`}>
                    <figure><img src={a.displayIcon} alt="ability-icon" /></figure>
                    <div className="card-body">
                      <h2 className="card-title" style={{ color: 'white' }}>{a.displayName}</h2>
                      <p style={{ color: 'white' }}>{a.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
