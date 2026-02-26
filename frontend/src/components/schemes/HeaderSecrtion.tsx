import { Gift } from "lucide-react";

export default function HeaderSecrtion() {
  return (
    <section className="pt-20 pb-10 text-center">
      <div className="mx-auto w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center shadow-sm">
        <Gift className="text-green-600" size={36} />
      </div>

      <h1 className="mt-8 text-4xl md:text-5xl font-bold text-primary">
        Discover Government Schemes
      </h1>

      <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
        Find schemes and subsidies you're eligible for based on your profile
      </p>
    </section>
  )
}
