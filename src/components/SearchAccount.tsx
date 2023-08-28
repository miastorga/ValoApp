import React, { useRef, useState } from 'react';
import { getAccount } from '../services/account';
import { AccountInfo } from './AccountInfo';
import { Error } from './Error';
import type { ValorantSwaggerResponse } from '../types.d.ts'

const ACCOUNT = 'https://api.henrikdev.xyz/valorant/v1/account/' // <----name/tag

export const SearchAccount = () => {
  const refId = useRef<HTMLInputElement>(null);
  const refTagLine = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | null>(null);

  const { data, isLoading } = getAccount<ValorantSwaggerResponse>(url)

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
      <h1 className='mt-4 text-4xl text-center'>Search account</h1>
      <section>
        <form className="m-6 flex justify-center gap-5 items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div className="grid flex-grow h-20 card bg-base-300 rounded-box place-items-center">
              <input type="text" ref={refId} placeholder="RIOT ID" className="input input-error w-full max-w-xs" />
            </div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <input type="text" ref={refTagLine} placeholder="TAGLINE" className="input input-error w-full max-w-xs" />
            </div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              {!isLoading && <button className="btn btn-error" type='submit'>Watch</button>}
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
      </section>
    </>
  )
}
