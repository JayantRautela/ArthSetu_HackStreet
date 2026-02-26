import { Calculator } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { occupations } from "../constants/data";
import Navbar from "../components/Navbar";

interface TaxFormData {
  income: string;
  occupation: string;
  investment80C: string;
  healthInsurance: string;
  homeLoanInterest: string;
  agriculturalIncome: string;
}

export default function TaxForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<TaxFormData>({
    income: "",
    occupation: "",
    investment80C: "",
    healthInsurance: "",
    homeLoanInterest: "",
    agriculturalIncome: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3333/api/v1/tax/compare",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            income: Number(formData.income),
            occupation: formData.occupation,
            investment80C: Number(formData.investment80C || 0),
            healthInsurance: Number(formData.healthInsurance || 0),
            homeLoanInterest: Number(formData.homeLoanInterest || 0),
            agriculturalIncome: Number(formData.agriculturalIncome || 0),
          }),
        }
      );

      const result = await response.json();

      navigate("/tax/results", { state: result });

    } catch (error) {
      console.error("Tax comparison failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-soft min-h-screen px-6 md:px-12 py-16">
      <Navbar />
      <div className="text-center my-12">
        <div className="mx-auto w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center">
          <Calculator size={36} className="text-primary" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-primary">
          Tax Regime Comparison
        </h1>

        <p className="mt-3 text-muted text-lg">
          We'll help you find which tax regime saves you the most money
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 text-sm text-gray-700">
        <strong>Don't worry!</strong> Fill in your details and we’ll calculate everything automatically.
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-8">

        <InputField
          label="Annual Income (₹)"
          name="income"
          value={formData.income}
          onChange={handleChange}
          required
          placeholder="e.g., 800000"
          helper="Your total yearly income from all sources"
        />

        <SelectField
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
          options={occupations}
          helper="Your employment type affects deductions"
        />

        <InputField
          label="Section 80C Investments (₹)"
          name="investment80C"
          value={formData.investment80C}
          onChange={handleChange}
          placeholder="e.g., 150000 (Max ₹1.5L)"
          helper="PPF, ELSS, Life Insurance, EPF (Max ₹1.5L)"
        />

        <InputField
          label="Health Insurance Premium (₹)"
          name="healthInsurance"
          value={formData.healthInsurance}
          onChange={handleChange}
          placeholder="e.g., 25000"
          helper="Medical insurance under Section 80D"
        />

        <InputField
          label="Home Loan Interest (₹)"
          name="homeLoanInterest"
          value={formData.homeLoanInterest}
          onChange={handleChange}
          placeholder="e.g., 200000"
          helper="Interest paid on housing loan (Max ₹2L)"
        />

        <InputField
          label="Agricultural Income (₹)"
          name="agriculturalIncome"
          value={formData.agriculturalIncome}
          onChange={handleChange}
          placeholder="e.g., 0"
          helper="Agricultural income (exempt but considered for rate purposes)"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full cursor-pointer bg-primary text-white py-4 rounded-2xl text-lg font-medium shadow-button hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Calculating..." : "Calculate Tax Comparison →"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 text-sm">
        <strong>🔒 Your data is secure</strong>
        <p className="mt-2 text-muted">
          All calculations use official Government of India tax slabs.
        </p>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  helper?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  name,
  value,
  placeholder,
  helper,
  required,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full bg-gray-100 focus:bg-white border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all"
      />

      {helper && (
        <p className="mt-2 text-xs text-muted">{helper}</p>
      )}
    </div>
  );
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  helper?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectField({
  label,
  name,
  value,
  options,
  helper,
  required,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full bg-gray-100 focus:bg-white border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all"
      >
        <option value="">Select {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {helper && (
        <p className="mt-2 text-xs text-muted">{helper}</p>
      )}
    </div>
  );
}