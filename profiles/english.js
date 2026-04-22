var en_profiles = {
  profile1: {
    "Programmatic": ["Programmatic", "AdOps", "Monetization", "Publisher", "Demand", "UA", "User Acquisition"],
    "Marketing x Ads": ["Marketing", "Advertising", "Ads", "Ad", "Brand", "Campaign", "Performance", "Growth"],
    "Business x Partnerships": ["Business", "Strategic", "Partnerships", "Operations", "Sales", "Commerce", "Development", "Revenue"],
    "Account x Client": ["Account", "Client", "Coordinator", "Relations", "Community"],
    "Communications": ["Communications", "Social", "Media", "Content", "PR", "Copywriting", "Digital"],
    "Leadership": ["CEO", "CFO", "CTO", "Director", "Founder", "Head", "Lead", "Executive"]
  },
  profile2: {
    "Programmatic": ["Programmatic", "AdOps", "Monetization", "Publisher", "Demand"],
    "Marketing x Ads": ["Marketing", "Advertising", "Ads", "Brand"],
    "Business": ["Business", "Strategic", "Partnerships", "Development"],
    "Other": ["Head", "Director", "Lead", "Executive"]
  },
  profile3: {
    "Data, Tech & Yield": ["Data Analyst", "Marketing Analyst", "BI", "Business Intelligence", "SQL", "BigQuery", "Attribution", "Measurement"],
    "Monetization & Revenue Ops": ["Yield", "Yield Management", "Monetization Manager", "Revenue Operations", "Pricing", "Inventory", "Forecasting", "Ad Revenue"],
    "AdTech Infrastructure": ["AdTech", "Ad Server", "SSP", "DSP", "CDP", "Tracking", "Privacy", "Consent", "Integration"]
  },
  profile4: {
    "Media, Strategy & Creative": ["Media Planner", "Media Buyer", "Digital Strategist", "Campaign Manager", "Paid Media", "Channel Strategy", "Omnichannel", "Performance Media"],
    "Planning & Account Strategy": ["Account Strategist", "Account Director", "Client Strategy", "Audience Planning", "Go-To-Market", "Brand Strategy", "Briefing", "Pitch"],
    "Creative & Activation": ["Creative Strategist", "Creative Producer", "Ad Creative", "Copywriter", "Content Strategy", "Creative Ops", "Campaign Execution", "Activation"]
  }
};

if (typeof profiles !== 'undefined') {
  Object.assign(profiles, en_profiles);
}
