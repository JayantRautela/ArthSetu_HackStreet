import { ArrowRight } from "lucide-react";
import { indianStates, occupations, residenceTypes } from "../../constants/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { type SchemeResponse } from "../../../types/scheme";

interface FormData {
  occupation: string;
  income: string;
  age: string;
  gender: string;
  residenceType: string;
  landOwned: string;
  state: string;
}

export default function SchemeForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    occupation: "",
    income: "",
    age: "",
    gender: "",
    residenceType: "",
    landOwned: "",
    state: "",
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

      const response = await fetch(" https://arthsetu-hackstreet.onrender.com/api/v1/subsidy/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          income: Number(formData.income),
          age: Number(formData.age),
          landOwned: Number(formData.landOwned || 0),
        }),
      });

      const result: SchemeResponse = await response.json();

      navigate("/schemes/results", {
        state: result,
      });

    } catch (error) {
      console.error("Failed to fetch schemes", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-12 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card p-8 md:p-12">

        <div className="space-y-8">

          <SelectField
            label="Occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
            helper="Your primary occupation or employment status"
            options={occupations}
          />

          <InputField
            label="Annual Household Income (₹)"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
            type="number"
            placeholder="e.g., 250000"
            helper="Total annual income of your household"
          />

          <InputField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            type="number"
            placeholder="e.g., 35"
            helper="Your current age in years"
          />

          <RadioField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            options={["Male", "Female", "Other"]}
            helper="Many schemes have gender-specific eligibility"
          />

          <SelectField
            label="Residence Type"
            name="residenceType"
            value={formData.residenceType}
            onChange={handleChange}
            required
            helper="Location affects scheme eligibility"
            options={residenceTypes}
          />

          <InputField
            label="Land Owned (in acres)"
            name="landOwned"
            value={formData.landOwned}
            onChange={handleChange}
            type="number"
            placeholder="e.g., 2.5 (Enter 0 if none)"
            helper="Agricultural or residential land owned"
          />

          <SelectField
            label="State / Union Territory"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            helper="State-specific schemes will be included"
            options={indianStates}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-12 w-full bg-primary cursor-pointer text-white py-4 rounded-2xl shadow-button hover:opacity-90 transition flex items-center justify-center gap-2 text-lg disabled:opacity-60"
        >
          {loading ? "Finding..." : "Find Eligible Schemes"}
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

interface InputProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  helper?: string;
  required?: boolean;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  value,
  placeholder,
  helper,
  required,
  type = "text",
  onChange,
}: InputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-2 w-full bg-gray-100 focus:bg-white border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 outline-none transition-all"
    />

    {helper && <p className="mt-2 text-xs text-muted">{helper}</p>}
  </div>
);

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  helper?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({
  label,
  name,
  value,
  options,
  helper,
  required,
  onChange,
}: SelectProps) => (
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

    {helper && <p className="mt-2 text-xs text-muted">{helper}</p>}
  </div>
);

interface RadioProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  helper?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioField = ({
  label,
  name,
  value,
  options,
  helper,
  required,
  onChange,
}: RadioProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <div className="mt-3 flex gap-6 flex-wrap">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            className="accent-primary w-4 h-4"
          />
          <span className="text-sm">{opt}</span>
        </label>
      ))}
    </div>

    {helper && <p className="mt-2 text-xs text-muted">{helper}</p>}
  </div>
);