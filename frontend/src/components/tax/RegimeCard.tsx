export default function RegimeCard({
  title,
  regime,
  recommended,
  showDeductions,
}: any) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-card p-8 border ${
        recommended ? "border-green-500 shadow-lg" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-primary">
          {title}
        </h2>

        {recommended && (
          <span className="bg-green-600 text-white text-sm px-4 py-2 rounded-full">
            Recommended
          </span>
        )}
      </div>

      <div>
        <p className="text-muted text-sm">Taxable Income</p>
        <p className="text-2xl font-bold">
          ₹{regime.taxableIncome.toLocaleString()}
        </p>
      </div>

      <div className="bg-gray-100 rounded-xl p-4 mt-6">
        <p className="text-muted text-sm">Total Tax Payable</p>
        <p className="text-2xl font-bold text-primary">
          ₹{regime.tax.toLocaleString()}
        </p>
        <p className="text-xs text-muted mt-1">
          Effective rate: {regime.effectiveRate}%
        </p>
      </div>

      {showDeductions && regime.deductionsBreakdown && (
        <div className="mt-6 space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">
            Key Deductions
          </h4>

          {regime.deductionsBreakdown.map((item: any, i: number) => (
            <div
              key={i}
              className="flex justify-between bg-gray-50 rounded-xl px-4 py-2 text-sm"
            >
              <span>{item.title}</span>
              <span>-₹{item.amount.toLocaleString()}</span>
            </div>
          ))}

          <div className="flex justify-between pt-4 border-t font-semibold">
            <span>Total Deductions</span>
            <span className="text-green-600">
              ₹{regime.totalDeductions.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}