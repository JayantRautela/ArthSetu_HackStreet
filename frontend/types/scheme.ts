export interface EligibilityRule {
  rule: string;
  matched: boolean;
}

export interface Scheme {
  id: string;
  name: string;
  benefitType: string;
  benefit: string;
  description: string;
  documentsRequired: string[];
  eligibilityRules: EligibilityRule[];
  matchScore: number;
  totalRules: number;
  matchedRules: number;
  explanation: string;
}

export interface SchemeResponse {
  totalRecommendations: number;
  data: Scheme[];
}