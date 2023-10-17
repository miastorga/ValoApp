import React, { useRef, useState } from 'react';
import { getAccount } from '../services/account';
import { AccountInfo } from './AccountInfo';
import { Error } from './Error';
import matchMock from '../mocks/Swagger/match.json'
import { MatchMetada } from './MatchMetada';
import { Metadata, Players } from "../models/matches"
import { MatchPlayers } from './MatchPlayers';

const ACCOUNT = 'https://api.henrikdev.xyz/valorant/v1/account/' // <----name/tag

export const SearchAccount = () => {
  const refId = useRef<HTMLInputElement>(null);
  const refTagLine = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | null>(null);

  const { data, isLoading, matches, loadingMatches } = getAccount(url)
  console.log('matches', matches?.data[0])
  // console.log(matchMock.data[0])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const inputName = refId.current?.value;
    const inputTagLine = refTagLine.current?.value;

    if (inputName && inputTagLine) {
      setUrl(`${ACCOUNT}${inputName}/${inputTagLine}`);
    }
  }

  return (
    <>
      <h1 className='mt-4 text-4xl text-center' style={{ color: 'white' }}>Search account</h1>
      <article>
        <form className="m-6 flex justify-center gap-5 items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div className="grid flex-grow h-20 card bg-base-300 rounded-box place-items-center" style={{ background: 'black' }}>
              <input type="text" ref={refId} placeholder="RIOT ID" className="input input-error w-full max-w-xs" />
            </div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center" style={{ background: 'black' }}>
              <input type="text" ref={refTagLine} placeholder="TAGLINE" className="input input-error w-full max-w-xs" />
            </div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center" style={{ background: 'black' }}>
              {!isLoading && <button className="btn btn-error" type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Search</button>}
              {
                isLoading && <button className="btn">
                  <span className="loading loading-spinner text-accent"></span>
                  loading
                </button>
              }
            </div>
          </div>
        </form>
        {data?.data && <AccountInfo data={data?.data} />}
        {data?.errors && <Error status={data.status} />}
      </article>
      {
        loadingMatches ? (
          <span className="loading loading-spinner text-accent mb-5"></span>
        ) : (
          matches?.data[0] && (
            <>
              <div className="text-center text-5xl mb-0">
                <h1>Last match</h1>
              </div>
              <MatchMetada metadata={matches?.data[0].metadata as Metadata} />
              <MatchPlayers playersData={matches?.data[0].players as Players} teams={matches?.data[0].teams} />
            </>
          )
        )
      }
    </>
  )
}
