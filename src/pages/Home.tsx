import { Link } from "react-router-dom";
import { Hero } from "../components/Hero"
import { SearchAccount } from "../components/SearchAccount";
import Weapons from '../assets/P-steres-de-Gaming-para-decoraci-n-de-la-habitaci-n-del-jugador-p-ster-de.jpg_.webp'

export const Home = () => {
  return (
    <main className="flex flex-col w-full bg-newBlack">
      <section className="grid h-full card bg-base-300 rounded-box place-items-center">
        <Hero />
      </section>
      <div className="divider"></div>
      <section className="grid h-full card bg-base-300 rounded-box place-items-center border-none">
        <SearchAccount />
      </section>
      <div className="hero" >
        <div className="hero-content flex-col lg:p-10 lg:gap-40 lg:flex-row">
          <img src="https://www.xtrafondos.com/thumbs/vertical/1_5356.jpg" className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-7xl font-bold mb-4">Agents</h1>
            <h2>LA CREATIVIDAD ES EL ARMA MÁS PODEROSA.</h2>
            <p className="py-6 w-auto">Aparte de las armas y las balas, tendréis a un agente con habilidades letales, adaptables y ágiles que os brindarán oportunidades para demostrar vuestro dominio de las armas. No hay dos agentes iguales, del mismo modo que no hay momentos destacados idénticos.
            </p>
            <Link to={'/agents'} className="btn btn-error w-60">Agents</Link>
          </div>
        </div>
      </div>
      <div className="hero mt-10">
        <div className="hero-content p-0 flex-col lg:p-10 lg:gap-40 lg:flex-row-reverse">
          <img src={Weapons} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-7xl font-bold mb-4">Weapons</h1>
            <p className="py-6">En el campo de batalla de Valorant, no solo las habilidades de los agentes definen la victoria. El dominio de tu arsenal es esencial para asegurar el éxito en cada enfrentamiento. Desde rápidas pistolas hasta potentes rifles, cada arma en tu inventario ofrece una manera única de imponer tu estrategia y estilo de juego. En Valorant, no todas las armas son iguales, y cada elección puede ser la diferencia entre una victoria aplastante y una derrota dolorosa. Descubre y domina tu armamento ideal.</p>
            <Link to={'/weapons'} className="btn btn-error w-60">Weapons</Link>
          </div>
        </div>
      </div>
    </main >
  )
}
