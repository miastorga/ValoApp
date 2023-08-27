import { Hero } from "../components/Hero"
import { SearchAccount } from "../components/SearchAccount";

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
    </main>
  )
}
