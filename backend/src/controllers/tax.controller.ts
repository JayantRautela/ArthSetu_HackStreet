import { type Request, type Response } from "express";
import { calculateTax } from "../utils/calculateTax.js";
import { calculateDeductions } from "../utils/deductionCalculator.js";
import { type UserTaxProfile } from "../types/taxTypes.js";
import { generateTaxAdvice } from "../utils/ai/taxAdvisory.js";

export const compareTaxController = async (req: Request, res: Response) => {
  try {
    const user: UserTaxProfile = req.body;

    const totalDeductions = calculateDeductions(user);

    const oldTaxableIncome = user.income - (user.agriculturalIncome || 0) - totalDeductions;

    const oldTax = calculateTax(Math.max(oldTaxableIncome, 0), "oldRegime");

    const oldEffectiveRate = oldTaxableIncome > 0 ? (oldTax / oldTaxableIncome) * 100 : 0;


    const newTaxableIncome = user.income - (user.agriculturalIncome || 0);

    const newTax = calculateTax(Math.max(newTaxableIncome, 0), "newRegime");

    const newEffectiveRate = newTaxableIncome > 0 ? (newTax / newTaxableIncome) * 100 : 0;

    const potentialSavings = Math.abs(oldTax - newTax);

    const recommendedRegime = newTax < oldTax ? "newRegime" : "oldRegime";

    const deductionsBreakdown = [
      {
        title: "Section 80C",
        amount: user.investment80C || 0,
      },
      {
        title: "Section 80D (Health Insurance)",
        amount: user.healthInsurance || 0,
      },
      {
        title: "Home Loan Interest",
        amount: user.homeLoanInterest || 0,
      },
    ];

    const advice = await generateTaxAdvice({
      oldTax,
      newTax,
      potentialSavings,
      recommendedRegime,
    },
      user
    );

    res.status(200).json({
      success: true,
      data: {
        potentialSavings,
        recommendedRegime,

        oldRegime: {
          taxableIncome: Math.max(oldTaxableIncome, 0),
          tax: oldTax,
          effectiveRate: Number(oldEffectiveRate.toFixed(2)),
          deductionsBreakdown,
          totalDeductions,
        },

        newRegime: {
          taxableIncome: Math.max(newTaxableIncome, 0),
          tax: newTax,
          effectiveRate: Number(newEffectiveRate.toFixed(2)),
        },
      },
      advice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error comparing tax regimes",
      error,
    });
  }
};