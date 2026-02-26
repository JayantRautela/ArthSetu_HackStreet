import { howItWorks } from '../constants/data'

export default function HowItWorks() {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-primary">How It Works</h2>

      <div className="flex md:flex-row justify-between mt-12 px-24">
        {howItWorks.map((item) => (
          <div key={item.id} className="max-w-xs">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto">
              <item.icon className='w-12 h-12'/>
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
