import background from '../assets/fondoHome.jpeg'
export const Hero = () => {
  return (
    <div className="hero min-h-[60vh]" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-newWhite">Valorant app</h1>
          <p className="mb-5 text-newWhite">A 5v5 character-based tactical shooter</p>
        </div>
      </div>
    </div>
  )
}
