import { problems } from '../constants/data'

export default function Problems() {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-primary">
        Why Citizens Struggle with Taxes & Schemes
      </h2>
      <p className="mt-4 text-gray-500">
        Understanding policies shouldn’t be this hard
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {problems.map((item) => (
          <div key={item.id} className="p-6 bg-soft rounded-xl shadow-card text-left">
            <item.icon className={`mb-4 text-[${item.color}]`}/>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
