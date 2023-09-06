import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Github } from './Icons'

export const NavbarLayout = () => {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Revisar Navbar y Dropdown component
  const menuItems = [
    'Agents',
    'Weapons',
    'Maps',
  ]
  const activeStyle = {
    color: '#FE4655',
  }

  return (
    <div className="navbar bg-newBlack">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              menuItems.map((m, idx) => (
                <NavLink key={idx} to={`/${m.toLowerCase()}`} className="px-5 text-lg text-white" style={({ isActive }) => isActive ? activeStyle : null}>{m}</NavLink>
              ))
            }
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-3xl" style={({ isActive }) => isActive ? activeStyle : null}>Valorant</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            menuItems.map((m, idx) => (
              <NavLink key={idx} to={`/${m.toLowerCase()}`} className="px-5 text-lg " style={({ isActive }) => isActive ? activeStyle : null}>{m}</NavLink>
            ))
          }
        </ul>
      </div>
      <div className="navbar-end ">
        <Link to={'https://github.com/miastorga'} className='text-newWhite flex justify-center items-center flex-row btn btn-error sm:btn-sm md:btn-md '>
          <Github width='50' height='50' />
        </Link>
      </div>
    </div >
  )
}
