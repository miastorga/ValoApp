import { ChangeEvent, useEffect, useState } from 'react';
import WeaponsMock from '../mocks/weapons.json'
import { getWeapons } from '../services/weapons';

export const Weapons = () => {
  const { isLoading, weaponsData } = getWeapons()
  console.log(weaponsData)
  const [weapons, setWeapons] = useState(weaponsData?.data)
  const [filter, setFilter] = useState('')

  const weaponType = [...new Set(weaponsData?.data.map(w => w.shopData?.category).filter(w => w != undefined))]

  useEffect(() => {
    if (weaponsData?.data) {
      setWeapons(weaponsData.data);
    }
  }, [weaponsData?.data]);

  function filterWeapons(currentFilter: string) {
    let filteredWeapons = weaponsData?.data

    if (currentFilter.trim() !== '' && currentFilter !== 'All') {
      filteredWeapons = filteredWeapons?.filter(weapon =>
        weapon.shopData?.category === currentFilter
      );
    }

    setWeapons(filteredWeapons)
  }

  function handleFilter(e: ChangeEvent<HTMLSelectElement>): void {
    const newType = e.target.value;
    setFilter(newType);
    filterWeapons(newType);
  }

  return (
    <div className='bg-newBlack flex flex-col '>
      <div className='flex items-center justify-start px-20'>
        <select className="select select-bordered sm:w-3/12" onChange={handleFilter}>
          <option disabled value='Pick rol'>Pick weapon type</option>
          <option value='All'>All</option>
          {
            weaponType.map(w => (
              <option key={w} value={w} >{w}</option>
            ))
          }
        </select>
      </div>
      <div className='pt-5 px-20 justify-center justify-items-centent gap-2 ' style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(400px,2fr))',
        gridTemplateRows: 'repeat(1,2fr)',
      }}>
        {
          weapons && weapons?.map(w => (
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
    </div>
  )
}
