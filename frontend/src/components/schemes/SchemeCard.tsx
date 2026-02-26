import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Scheme } from "../../../types/scheme";

interface Props {
  scheme: Scheme;
}

const SchemeCard = ({ scheme }: Props) => {
  const navigate = useNavigate();

  const matchColor =
    scheme.matchScore >= 80 ? "bg-green-600" : scheme.matchScore >= 50 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="bg-white rounded-3xl shadow-card p-8">

      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-xl font-semibold text-primary">
            {scheme.name}
          </h3>

          {scheme.benefitType && (
            <span className="mt-2 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
              {scheme.benefitType}
            </span>
          )}
        </div>

        <div
          className={`${matchColor} text-white px-5 py-3 rounded-2xl shadow-md`}
        >
          <span className="text-2xl font-bold">
            {scheme.matchScore}%
          </span>
          <span className="ml-2 text-sm">Match</span>
        </div>
      </div>

      <p className="mt-6 text-gray-700">
        {scheme.description}
      </p>

      {scheme.explanation && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
          <div className="flex items-start gap-2">
            <CheckCircle size={18} className="text-green-600 mt-1" />
            <div>
              <p className="font-medium text-green-800">
                Why you're eligible:
              </p>
              <p className="text-green-700 text-sm mt-1">
                {scheme.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between items-center">

        {scheme.benefit && (
          <span className="text-sm">
            <strong>Benefit:</strong> {scheme.benefit}
          </span>
        )}

        <button
          onClick={() =>
            navigate(`/schemes/${scheme.id}`, {
              state: scheme,
            })
          }
          className="bg-primary cursor-pointer text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition"
        >
          View Details
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SchemeCard;