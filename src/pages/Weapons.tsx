import WeaponsMock from '../mocks/weapons.json'

export const Weapons = () => {
  console.log(WeaponsMock.data)

  return (
    <div className='pt-5 px-20 justify-center justify-items-centent gap-2 bg-newBlack' style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(400px,2fr))',
      gridTemplateRows: 'repeat(1,2fr)',
    }}>
      {
        WeaponsMock.data.map(w => (
          <div className="card rounded-none p-3 " key={w.uuid}>
            <div className="p-0 card-body">
              <h2 className="card-title text-4xl">{w.displayName}</h2>
              <p>{w.shopData?.category}</p>
              <div className="card-actions justify-end">
              </div>
            </div>
            <figure><img className='w-3/4' src={w.displayIcon} alt={w.displayName} /></figure>
          </div>
        ))
      }
    </div>
  )
}
