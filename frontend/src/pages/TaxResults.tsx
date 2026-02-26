import { useLocation } from "react-router-dom";
import RegimeCard from "../components/tax/RegimeCard";
import { CheckCircle, TrendingDown } from "lucide-react";
import Navbar from "../components/Navbar";

export default function TaxResults() {
  const location = useLocation();
  const { data, advice } = location.state;

  const { potentialSavings, recommendedRegime, oldRegime, newRegime } = data;

  return (
    <div className="bg-soft min-h-screen px-6 md:px-12 py-16">
      <Navbar />
      <div className="text-center my-12">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center">
          <CheckCircle size={36} className="text-green-600" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-primary">
          Your Tax Comparison Results
        </h1>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-card p-8 flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-4 rounded-xl">
            <TrendingDown className="text-primary" />
          </div>
          <div>
            <p className="text-muted text-sm">Potential Tax Savings</p>
            <p className="text-3xl font-bold text-primary">
              ₹{potentialSavings.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-muted text-sm">Recommended Regime</p>
          <p className="text-2xl font-semibold text-green-600">
            {recommendedRegime === "newRegime"
              ? "New Regime"
              : "Old Regime"}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <RegimeCard
          title="Old Tax Regime"
          regime={oldRegime}
          recommended={recommendedRegime === "oldRegime"}
          showDeductions
        />

        <RegimeCard
          title="New Tax Regime"
          regime={newRegime}
          recommended={recommendedRegime === "newRegime"}
        />
      </div>

      <div className="max-w-6xl mx-auto mt-12 bg-orange-50 border border-orange-200 rounded-3xl p-8">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Why this regime is better for you
        </h3>
        <p className="text-gray-700 whitespace-pre-line">
          {advice}
        </p>
      </div>
    </div>
  );
}