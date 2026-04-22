var fr_profiles = {
  profile9: { // Main
    "Programmatique": ["Programmatic", "AdOps", "Monétisation", "Publisher", "Demand", "UA", "User Acquisition"],
    "Marketing x Ads": ["Marketing", "Publicité", "Ads", "Ad", "Brand", "Campagne", "Performance", "Growth"],
    "Business x Partenariats": ["Business", "Stratégique", "Partenariats", "Opérations", "Sales", "Commerce", "Développement", "Revenue"],
    "Account x Client": ["Account", "Client", "Coordinateur", "Relations", "Community"],
    "Communication": ["Communication", "Social", "Media", "Contenu", "RP", "Copywriting", "Digital"],
    "Leadership": ["CEO", "Directeur", "Fondateur", "Head", "Lead", "Executive"]
  },
  profile10: { // Relevant
    "Programmatique": ["Programmatic", "AdOps", "Monétisation", "Publisher", "Demand"],
    "Marketing x Ads": ["Marketing", "Publicité", "Ads", "Brand"],
    "Business": ["Business", "Stratégique", "Partenariats", "Développement"],
    "Autres": ["Head", "Directeur", "Lead", "Executive"]
  },
  profile11: { // Mix 1
    "Data, Tech & Yield": ["Data Analyst", "Analyste Data", "BI", "Business Intelligence", "SQL", "BigQuery", "Attribution", "Mesure"],
    "Monétisation & Revenue Ops": ["Yield", "Yield Management", "Monétisation", "Revenue Operations", "Pricing", "Inventaire", "Forecasting", "Revenu publicitaire"],
    "Infrastructure AdTech": ["AdTech", "Ad Server", "SSP", "DSP", "CDP", "Tracking", "Privacy", "Consentement", "Intégration"]
  },
  profile12: { // Mix 2
    "Media, Stratégie & Création": ["Media Planner", "Media Buyer", "Digital Strategist", "Campaign Manager", "Paid Media", "Plan média", "Performance Media", "Omnicanal"],
    "Stratégie Média & Compte": ["Account Strategist", "Directeur de clientèle", "Stratégie digitale", "Stratégie client", "Audience Planning", "Brand Strategy", "Brief", "Pitch"],
    "Créatif & Activation": ["Creative Strategist", "Producer Créatif", "Création publicitaire", "Copywriter", "Content Strategy", "Creative Ops", "Activation", "Exécution de campagne"]
  }
};

if (typeof profiles !== 'undefined') {
  Object.assign(profiles, fr_profiles);
}
