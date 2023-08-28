import { SWRConfig } from "swr";
import { Hero } from "../components/Hero"
import { SearchAccount } from "../components/SearchAccount";

class LocalStorageCache extends Map<string, any> {
  constructor(initialData?: readonly (readonly [string, any])[] | null) {
    super(initialData);
  }

  keys(): IterableIterator<string> {
    return super.keys() as IterableIterator<string>;
  }
}

function localStorageProvider() {
  const map = new LocalStorageCache(JSON.parse(localStorage.getItem('home-cache') || '[]'));

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('home-cache', appCache);
  });

  return map;
}


export const Home = () => {
  return (
    <main className="flex flex-col w-full bg-newBlack">
      <section className="grid h-full card bg-base-300 rounded-box place-items-center">
        <Hero />
      </section>
      <div className="divider"></div>
      <section className="grid h-full card bg-base-300 rounded-box place-items-center border-none">
        <SWRConfig value={{
          revalidateOnFocus: false,
          provider: localStorageProvider
        }}>
          <SearchAccount />
        </SWRConfig>
      </section>
    </main>
  )
}
