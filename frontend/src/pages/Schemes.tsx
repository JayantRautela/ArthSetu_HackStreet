import Navbar from "../components/Navbar";
import HeaderSecrtion from "../components/schemes/HeaderSecrtion";
import SchemeForm from "../components/schemes/SchemeForm";

export default function Schemes() {
  return (
    <div className="bg-soft min-h-screen">
      <Navbar />
      <HeaderSecrtion />
      <SchemeForm />
    </div>
  )
}
