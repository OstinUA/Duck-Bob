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
    "Tech Programmatic": ["Programmatic", "AdOps", "Monétisation", "Publisher", "Demand", "AdTech"],
    "Acquisition & Performance": ["UA", "User Acquisition", "Performance", "Growth", "Campagne"],
    "Activation Media": ["Ads", "Ad", "Media", "Digital", "Marketing"]
  },
  profile12: { // Mix 2
    "Business Development AdTech": ["Business", "Développement", "Revenue", "Commerce", "Sales"],
    "Partenariats Stratégiques": ["Stratégique", "Partenariats", "Relations", "Client", "Account"],
    "Leadership Exécutif": ["CEO", "Fondateur", "Directeur", "Head", "Lead", "Executive"]
  }
};

if (typeof profiles !== 'undefined') {
  Object.assign(profiles, fr_profiles);
}
