import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="px-10 py-20 bg-soft">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary leading-tight">
            Simplify Taxes & Government Schemes with AI
          </h1>
          <p className="mt-6 text-gray-600">
            Compare tax regimes, discover eligible schemes, and get instant
            answers — all in one trusted platform.
          </p>

          <div className="mt-6 flex gap-4">
            <Link to={'/tax'}>
              <button className="bg-primary cursor-pointer hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-card">
                Compare Tax Regimes
              </button>
            </Link>
            <Link to={'/schemes'}>
              <button className="border cursor-pointer hover:bg-primary hover:text-white border-primary text-primary px-6 py-3 rounded-lg">
                Find Schemes
              </button>
            </Link>
          </div>
        </div>

        <img src="/illustrator.png"  />
      </div>
    </section>
  )
}
