import { Metadata } from "../models/matches"

type Props = {
  metadata: Metadata | undefined
}

export const MatchMetada = ({ metadata }: Props) => {
  return (
    <article className="p-5 w-3/4 ">
      <div className="flex gap-2 flex-wrap justify-evenly w-100 justify-items-center items-center text-2xl text-center">
        <div className="alert bg-neutral shadow-lg flex flex-row justify-evenly flex-wrap text-center gap-10  ">
          <div className="flex justify-center justify-items-center flex-col">
            <h1 className="font-bold text-newWhite">Map:</h1>
            <p className="text-newWhite">{metadata?.map}</p>
          </div>
          <div className="flex justify-center justify-items-center flex-col">
            <h1 className="font-bold text-newWhite">Mode:</h1>
            <p className="text-newWhite">{metadata?.mode}</p>
          </div>
          <div className="flex justify-center justify-items-center flex-col">
            <h1 className="font-bold text-newWhite">Queue:</h1>
            <p className="text-newWhite">{metadata?.queue}</p>
          </div>
          <div className="flex justify-center justify-items-center flex-col">
            <h1 className="font-bold text-newWhite">Region:</h1>
            <p className="text-newWhite">{metadata?.region}</p>
          </div>
          <div className="flex justify-center justify-items-center flex-col">
            <h1 className="font-bold text-newWhite">Rounds played:</h1>
            <p className="text-newWhite">{metadata?.rounds_played}</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </article>
  )
}
