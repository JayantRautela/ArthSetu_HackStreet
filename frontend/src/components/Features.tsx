import { features } from '../constants/data'
import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <section className="py-20 px-10 bg-soft">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary">
          Everything You Need in One Place
        </h2>
        <p className='mt-4 text-gray-500'>Powerful tools designed for Indian Citizens</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white p-8 rounded-4xl shadow-card">
            <feature.icon className={`mb-4`} />
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="my-4 text-gray-600 text-sm">{feature.p}</p>
            {feature.desc.map((i) => (
              <p className='flex gap-2 mb-2'><CheckCircle className='text-green-500'/>{i}</p>
            ))}
            <Link to={feature.href}>
              <button className="mt-6 text-primary font-medium cursor-pointer hover:text-[#2f5d9a]">
                Get Started →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
