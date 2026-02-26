import { OctagonAlert, Search, Languages, Calculator, Gift, MessageSquare, UserCircle, Brain, Sparkles, Shield, DollarSign, BookOpen, Users } from "lucide-react"
export const features = [
  {
    id: 1,
    title: "Tax Regime Comparison",
    icon: Calculator,
    color: '#138808',
    p: "Compare old vs new tax regimes with your actual income and deductions",
    desc: [
      "Side-by-side breakdown",
      "Personalized Recommendartion",
      "Instant Saving Calculation"
    ],
    href: '/tax'
  },
  {
    id: 2,
    title: "Scheme & Subsidy Finder",
    icon: Gift,
    color: '#138808',
    p: "Discover goernment scheme you are eligible for based on your profile",
    desc: [
      "Income based matching",
      "Ranked recommendations",
      "Required Documents List"
    ],
    href: '/schemes'
  },
  {
    id: 3,
    title: "AI Tax Assistant",
    icon: MessageSquare,
    color: '#7AAACE',
    p: "Ask any tax or schemes question in your preferred language",
    desc: [
      "Multilingual Support",
      "Instant Answer",
      "Context-aware guidance"
    ],
    href: '/chat'
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Enter your details",
    desc: "Provide your income, deduction and basic profile information securely",
    icon: UserCircle
  },
  {
    id: 2,
    title: "Get Personalized Analysis",
    desc: "Our AI analyze your data against tax rules and schemes eligibility criteria.",
    icon: Brain
  },
  {
    id: 3,
    title: "Make Informed Decisions",
    desc: "Recieve clear recommendations and answers to help you save money and access benfits",
    icon: Sparkles
  },
];

export const problems = [
  {
    id: 1,
    title: "Tax Regime Confusion",
    desc: "Old vs new regime? Most people struggle to decide.",
    icon: OctagonAlert,
    color: '#7AAACE'
  },
  {
    id: 2,
    title: "Schemes are Hard to Discover",
    desc: "Hundreds of schemes exist but finding relevant ones is difficult.",
    icon: Search,
    color: '#138808'
  },
  {
    id: 3,
    title: "Complex Language Barriers",
    desc: "Technical jargon excludes many citizens.",
    icon: Languages,
    color: '#355872'
  },
];

export const trust = [
  {
    id: 1,
    title: "Official Tax Slabs and Scheme Rules",
    icon: Shield,
    desc: "All claculations based on current government regulations"
  },
  {
    id: 2,
    title: "No Hidden Agendas",
    icon: DollarSign,
    desc: "Free to use, No upselling, completely transparent"
  },
  {
    id: 3,
    title: "Plain Language Explanation",
    icon: BookOpen,
    desc: "No jargon, juts lcear answers in simple language"
  },
  {
    id: 4,
    title: "Build For Citizens",
    icon: Users,
    desc: "Designed with accessibility and ease of use in mind"
  },
];

export const occupations = [
  "Business",
  "Private Employee",
  "Government Employee",
  "Farmer"
];

export const residenceTypes = ["Urban", "Rural"];

export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];
