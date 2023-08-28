import { Data } from '../models/account'

type AccountInfoProps = {
  data: Data;
};

export function AccountInfo({ data: account }: AccountInfoProps) {
  const { account_level, card, last_update, name, region, tag } = account
  return (
    <>
      < figure className='mt-2' > <img src={card.wide} alt="Movie" className="mt-2" /></ figure>
      <div className="card-body justify-center items-center flex-row gap-4 flex-wrap">
        <div className='flex items-center flex-row gap-2 text-xl'>
          <p>Name</p>
          <h2 className="badge badge-accent badge-outline px-7 py-3 text-base">{name}</h2>
        </div>
        <div className='flex items-center flex-row gap-2 text-xl'>
          <p>Tag</p>
          <h2 className="badge badge-accent badge-outline px-7 py-3 text-base">#{tag}</h2>
        </div>
        <div className='flex items-center flex-row gap-2 text-xl'>
          <p>Account level</p>
          <h2 className="badge badge-accent badge-outline px-7 py-3 text-base">{account_level}</h2>
        </div>
        <div className='flex items-center flex-row gap-2 text-xl'>
          <p>Region</p>
          <h2 className="badge badge-accent badge-outline px-7 py-3 text-base">{region}</h2>
        </div>
        <div className='flex items-center flex-row gap-2 text-xl'>
          <p>Last update</p>
          <h2 className="badge badge-accent badge-outline px-7 py-3 text-base">{last_update}</h2>
        </div>
      </div >
    </>
  )
}

