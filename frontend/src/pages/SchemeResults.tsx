import { useLocation } from "react-router-dom";
import type { SchemeResponse } from "../../types/scheme";
import SchemeCard from "../components/schemes/SchemeCard";
import Navbar from "../components/Navbar";

const SchemeResults = () => {
  const location = useLocation();
  const { data, totalRecommendations } =
    location.state as SchemeResponse;

  return (
    <div className="bg-soft min-h-screen py-16 px-6 md:px-12">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-14">

        <h2 className="text-3xl font-bold text-primary mb-2">
          Eligible Schemes
        </h2>

        <p className="text-muted mb-10">
          We found <span className="font-bold">{totalRecommendations} schemes </span> you maybe eligible based on your profile.
        </p>

        <div className="space-y-8">
          {data.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SchemeResults;