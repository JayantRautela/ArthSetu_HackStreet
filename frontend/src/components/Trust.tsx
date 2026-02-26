import { trust } from '../constants/data'

export default function Trust() {
  return (
    <section className="py-20 px-10 bg-soft text-center">
      <h2 className="text-3xl font-bold text-primary">
        Why Trust ArthSetu?
      </h2>
      <p className='text-gray-500 mt-4'>Built for citizens, powered by accuracy</p>

      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {trust.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-card text-center">
            <item.icon className='w-8 h-8 mx-auto mb-4'/>
            <h1 className='font-semibold text-2xl text-[#355872]'>{item.title}</h1>
            <p className='mt-2 text-gray-500'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
