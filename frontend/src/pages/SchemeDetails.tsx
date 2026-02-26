import { useLocation } from "react-router-dom";
import type { Scheme } from "../../types/scheme";
import Navbar from "../components/Navbar";

const SchemeDetails = () => {
  const location = useLocation();
  const scheme = location.state as Scheme;

  return (
    <div className="bg-soft min-h-screen py-16 px-6 md:px-12">
      <Navbar />
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card p-10 mt-14">

        <h1 className="text-3xl font-bold text-primary">
          {scheme.name}
        </h1>

        {scheme.benefitType && (
          <span className="mt-3 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {scheme.benefitType}
          </span>
        )}

        <p className="mt-6 text-gray-700">
          {scheme.description}
        </p>

        {scheme.benefit && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Benefit</h3>
            <p className="mt-2">{scheme.benefit}</p>
          </div>
        )}

        <div className="mt-8">
          <h3 className="font-semibold text-lg">Eligibility Match</h3>
          <p className="mt-2">
            {scheme.matchedRules} out of {scheme.totalRules} rules matched
          </p>
          <p className="mt-2 text-green-700">
            {scheme.explanation}
          </p>
        </div>

        {scheme.documentsRequired?.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg">
              Documents Required
            </h3>
            <ul className="mt-3 list-disc list-inside space-y-1">
              {scheme.documentsRequired.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeDetails;