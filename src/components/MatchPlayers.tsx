import { Players, Teams } from "../models/matches"
import Versus from '../assets/vs.png'
import { Clown, Crown, Damage, Dollar, HeadShot, HighScore, Skull } from "./Icons"

type Props = {
  playersData: Players | undefined,
  teams: Teams | undefined
}
export const MatchPlayers = ({ playersData, teams }: Props) => {
  const blueTeam = playersData?.blue
  const redTeam = playersData?.red
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row p-3">
        <div className="grid flex-grow h-full card rounded-box place-items-center bg-info p-2 gap-2">
          <div className="text-center m-3 text-newBlack font-bold text-2xl">
            <div className="flex justify-center gap-6 justify-items-center items-center">
              <h1>{teams?.blue.has_won ? 'Vistory' : 'Defeated'}</h1>
              <Clown width="50" height="50" />
            </div>
            <div className="flex gap-2">
              <p>Rounds won {teams?.blue.rounds_won}</p>
              <p>Rounds lost {teams?.blue.rounds_lost}</p>
            </div>
          </div>
          {
            blueTeam?.map(b => (
              <div className='stats shadow w-full' style={{ backgroundImage: `url(${b.assets.card.wide})` }} key={b.puuid}>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary mx-2">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={b.assets.agent.small} />
                      </div>
                    </div>
                  </div>
                  <div className="badge badge-info text-newWhite font-bold">#{b.tag}</div>
                  <div className="stat-value text-lg text-wrap text-newWhite">{b.name}</div>
                  <div className="stat-title text-base text-newWhite">{b.character}</div>
                  <div className="stat-title text-base text-newWhite">Lvl {b.level}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-primary m-2">
                    <HighScore height={"20"} width={"20"} />
                  </div>
                  <div className="stat-title text-1xl text-newWhite font-bold">Score</div>
                  <div className="stat-value text-secondary ">{b.stats.score}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary m-2">
                    <Skull width="25" height="25" />
                  </div>
                  <div className="stat-title text-newWhite font-bold">K/D/A</div>
                  <div className="flex gap-1">
                    <div className="stat-value text-xl text-secondary font-bold">{b.stats.kills}</div>
                    <span className="text-newWhite font-bold">/</span>
                    <div className="stat-value text-xl text-secondary font-bold">{b.stats.deaths}</div>
                    <span className="text-newWhite font-bold">/</span>
                    <div className="stat-value text-xl text-secondary font-bold">{b.stats.assists}</div>
                  </div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-primary m-2">
                    <HeadShot height="25" width="25" />
                  </div>
                  <div className="stat-title text-1xl text-newWhite font-bold">Head shots</div>
                  <div className="stat-value text-secondary">{b.stats.headshots}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-primary m-2">
                    <Damage width="20" height="20" />
                  </div>
                  <div className="stat-title text-newWhite font-bold">Damage made</div>
                  <div className="stat-value text-secondary text-xl">{b.damage_made}</div>
                  <div className="stat-title text-newWhite font-bold">Damage received</div>
                  <div className="stat-value text-secondary text-xl">{b.damage_received}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary m-2">
                    <Dollar width="20" height="20" />
                  </div>
                  <div className="stat-title text-newWhite font-bold">Averge spent</div>
                  <div className="stat-value text-secondary text-xl">{b.economy.spent.average}</div>
                  <div className="stat-title text-newWhite font-bold">Overall spent</div>
                  <div className="stat-value text-secondary text-xl">{b.economy.spent.overall}</div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center items-center p-2">
          <div>
            <img src={Versus} alt="" className="w-36" />
          </div>
        </div>

        <div className="grid flex-grow h-full card rounded-box place-items-center bg-newRed p-2 gap-2">
          <div className="text-center m-3 text-newBlack font-bold text-2xl">
            <div className="flex justify-center gap-6 justify-items-center items-center">
              <h1>{teams?.red.has_won ? 'Victory' : 'Defeated'}</h1>
              <Crown width="50" height="50" />
            </div>
            <div className="flex gap-2">
              <p>Rounds won {teams?.red.rounds_won}</p>
              <p>Rounds lost {teams?.red.rounds_lost}</p>
            </div>
          </div>
          {
            redTeam?.map(b => (
              <div className='stats shadow w-full' style={{ backgroundImage: `url(${b.assets.card.wide})` }} key={b.puuid}>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary mx-2">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={b.assets.agent.small} />
                      </div>
                    </div>
                  </div>
                  <div className="badge bg-newRed text-newWhite font-bold">#{b.tag}</div>
                  <div className="stat-value text-lg text-wrap text-newWhite">{b.name}</div>
                  <div className="stat-title text-base text-newWhite">{b.character}</div>
                  <div className="stat-title text-base text-newWhite">Lvl {b.level}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-primary m-2">
                    <HighScore height={"20"} width={"20"} />
                  </div>
                  <div className="stat-title text-1xl text-newWhite font-bold">Score</div>
                  <div className="stat-value text-primary ">{b.stats.score}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary m-2">
                    <Skull width="25" height="25" />
                  </div>
                  <div className="stat-title text-newWhite font-bold">K/D/A</div>
                  <div className="flex gap-1">
                    <div className="stat-value text-xl text-primary font-bold">{b.stats.kills}</div>
                    <span className="text-newWhite font-bold">/</span>
                    <div className="stat-value text-xl text-primary font-bold">{b.stats.deaths}</div>
                    <span className="text-newWhite font-bold">/</span>
                    <div className="stat-value text-xl text-primary font-bold">{b.stats.assists}</div>
                  </div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary m-2">
                    <HeadShot height="25" width="25" />
                  </div>
                  <div className="stat-title text-1xl text-newWhite font-bold">Head shots</div>
                  <div className="stat-value text-primary">{b.stats.headshots}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-primary m-2">
                    <Damage width="20" height="20" />
                  </div>
                  <div className="stat-title text-newWhite font-bold">Damage made</div>
                  <div className="stat-value text-primary text-xl">{b.damage_made}</div>
                  <div className="stat-title text-newWhite font-bold">Damage received</div>
                  <div className="stat-value text-primary text-xl">{b.damage_received}</div>
                </div>
                <div className="stat gap-x-0 bg-newBlack opacity-80">
                  <div className="stat-figure text-secondary m-2">
                    <Dollar width="20" height="20" />
                  </div>
                  <div className="stat-title text-newWhite font-bold">Averge spent</div>
                  <div className="stat-value text-primary text-xl">{b.economy.spent.average}</div>
                  <div className="stat-title text-newWhite font-bold">Overall spent</div>
                  <div className="stat-value text-primary text-xl">{b.economy.spent.overall}</div>
                </div>
              </div>
            ))
          }

        </div>
      </div >
    </>
  )
}
