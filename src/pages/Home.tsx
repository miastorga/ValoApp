import { Hero } from "../components/Hero"
import account from '../mocks/Swagger/account.json'

export type Accound = {
  status: number;
  data: Data;
}

export type Data = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: Card;
  last_update: string;
  last_update_raw: number;
}

export type Card = {
  small: string;
  large: string;
  wide: string;
  id: string;
}


export const Home = () => {
  const { data } = account
  console.log(data)
  return (
    <main >
      <div className="bg-base-300 flex">
        <Hero />
        {/*   card       */}
        <div className="card card-side bg-base-100 shadow-xl lg:container mx-auto rounded-none">
          <figure><img src={data.card.large} alt="Movie" /></figure>
          <section>
            <div className="m-6 flex justify-center ">
              <input type="text" placeholder="Account" className="input input-error w-full max-w-xs" />
              <div className="badge badge-error badge-outline px-7 py-3">{data.region}</div>
            </div>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <div className="badge badge-accent badge-outline px-7 py-3">#{data.tag}</div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
          </div>
        </div> */}
      </div>
    </main>
  )
}
