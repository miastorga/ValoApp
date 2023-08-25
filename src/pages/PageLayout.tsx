import { Outlet } from 'react-router-dom'
import { NavbarLayout } from '../components/NavbarLayout'
import { Footer } from '../components/Footer'

export const PageLayout = () => {
  return (
    <>
      <NavbarLayout />
      <Outlet />
      <Footer />
    </>
  )
}
