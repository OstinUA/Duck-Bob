
const profiles = { // Основний текст
  profile1: {
"Programmatic": ["Programmatic", "Adops", "Monetization", "Publicidat", "Publisher", "Demand", "UA", "User Acquisition"],
"Marketing x Ads": ["Marketing", "Advertising", "Ads", "Ad", "Publicidad", "Brand", "Campaign", "Performance", "Growth"],
"Business x Partnerships": ["Business", "Strategic", "Partnerships", "Operations", "Sales", "Sale", "Commerce", "Development", "Revenue"],
"Account x Client Relations": ["Account", "Client", "Coordinator", "Relations", "Community"],
"Communications x Media": ["Communications", "Social", "Media", "Content", "PR", "Copywriting", "Digital"],
"Management x Leadership": ["CEO", "President", "Director", "Co-Founder", "Founder", "Head", "Lead", "Executive"]
  },

  profile2: { // Релевантні
"Programmatic": ["Programmatic", "Adops", "Monetization", "Publisher", "Demand", "UA", "User Acquisition"],
"Marketing x Ads": ["Marketing", "Advertising", "Ads", "Ad", "Brand", "Campaign"],
"Business x Partnerships": ["Business", "Strategic", "Partnerships", "Development", "Commerce"],
"Other": ["Account", "Media", "Head", "Director", "Lead", "Executive"],
"Removed / Not Recommended": ["Publicidat", "Publicidad", "Performance", "Growth", "Sales", "Sale", "Operations", "Revenue", "Client", "Coordinator", "Relations", "Community", "Communications", "Social", "Content", "PR", "Copywriting", "Digital", "CEO", "President", "Co-Founder", "Founder"],
  },
    profile3: { // Всі 2
"Prospects List1": ["Programmatic", "Adops", "Monetization", "Publisher", "Demand", "UA", "User Acquisition", "Marketing", "Advertising", "Ads", "Ad", "Brand", "Campaign", "Tech", "Sales", "Sale"],
"Prospects List2": ["Business", "Strategic", "Partnerships", "Development", "Commerce", "Account", "Media", "Head", "Director", "Lead", "Executive"],
"Removed / Not Recommended": ["Publicidat", "Publicidad", "Performance", "Growth", "Operations", "Revenue", "Client", "Coordinator", "Relations", "Community", "Communications", "Social", "Content", "PR", "Copywriting", "Digital", "CEO", "President", "Co-Founder", "Founder"],
  },

  profile4: { // Испанский
"Programmatic": ["Programática", "Adops", "Monetización", "Publicidad Programática", "Editor", "Demanda", "UA", "Adquisición de Usuarios"],
"Marketing x Ads": ["Marketing", "Publicidad", "Anuncios", "Anuncio", "Publicidad Digital", "Marca", "Campaña", "Rendimiento", "Crecimiento"],
"Business x Partnerships": ["Negocios", "Estrategia", "Alianzas", "Operaciones", "Ventas", "Comercio", "Desarrollo", "Ingresos"],
"Account x Client Relations": ["Cuenta", "Cliente", "Coordinador", "Relaciones", "Comunidad"],
"Communications x Media": ["Comunicación", "Social", "Medios", "Contenido", "PR", "Redacción", "Digital"],
"Management x Leadership": ["CEO", "Presidente", "Director", "Cofundador", "Fundador", "Jefe", "Líder", "Ejecutivo"]
  },
  
   profile5: { // Французский
"Programmatic": ["Programmatique", "Adops", "Monétisation", "Publicité Programmatique", "Éditeur", "Demande", "UA", "Acquisition Utilisateur"],
"Marketing x Ads": ["Marketing", "Publicité", "Annonces", "Annonce", "Publicité Digitale", "Marque", "Campagne", "Performance", "Croissance"],
"Business x Partnerships": ["Business", "Stratégique", "Partenariats", "Opérations", "Ventes", "Commerce", "Développement", "Revenu"],
"Account x Client Relations": ["Compte", "Client", "Coordinateur", "Relations", "Communauté"],
"Communications x Media": ["Communication", "Social", "Médias", "Contenu", "RP", "Rédaction", "Digital"],
"Management x Leadership": ["CEO", "Président", "Directeur", "Cofondateur", "Fondateur", "Chef", "Leader", "Exécutif"]
  },
  
   profile6: { // Немецкий
"Programmatic": ["Programmatic", "Adops", "Monetarisierung", "Programmatic Advertising", "Publisher", "Nachfrage", "UA", "Nutzerakquise"],
"Marketing x Ads": ["Marketing", "Werbung", "Ads", "Anzeige", "Digitale Werbung", "Marke", "Kampagne", "Performance", "Wachstum"],
"Business x Partnerships": ["Business", "Strategie", "Partnerschaften", "Betrieb", "Vertrieb", "Handel", "Entwicklung", "Umsatz"],
"Account x Client Relations": ["Account", "Kunde", "Koordinator", "Beziehungen", "Community"],
"Communications x Media": ["Kommunikation", "Sozial", "Medien", "Content", "PR", "Texterstellung", "Digital"],
"Management x Leadership": ["CEO", "Präsident", "Direktor", "Mitbegründer", "Gründer", "Leiter", "Führungskraft", "Executive"]
  },
  
   profile7: { // Португальский
"Programmatic": ["Programática", "Adops", "Monetização", "Publicidade Programática", "Editor", "Demanda", "UA", "Aquisição de Usuários"],
"Marketing x Ads": ["Marketing", "Publicidade", "Anúncios", "Anúncio", "Publicidade Digital", "Marca", "Campanha", "Performance", "Crescimento"],
"Business x Partnerships": ["Negócios", "Estratégico", "Parcerias", "Operações", "Vendas", "Comércio", "Desenvolvimento", "Receita"],
"Account x Client Relations": ["Conta", "Cliente", "Coordenador", "Relações", "Comunidade"],
"Communications x Media": ["Comunicação", "Social", "Mídia", "Conteúdo", "RP", "Copywriting", "Digital"],
"Management x Leadership": ["CEO", "Presidente", "Diretor", "Cofundador", "Fundador", "Chefe", "Líder", "Executivo"]
  },
  
  profile8: { // Польский
"Programmatic": ["Programmatic", "Adops", "Monetyzacja", "Reklama Programatyczna", "Wydawca", "Popyt", "UA", "Pozyskiwanie Użytkowników"],
"Marketing x Ads": ["Marketing", "Reklama", "Reklamy", "Ogłoszenie", "Reklama Cyfrowa", "Marka", "Kampania", "Performance", "Wzrost"],
"Business x Partnerships": ["Biznes", "Strategia", "Partnerstwa", "Operacje", "Sprzedaż", "Handel", "Rozwój", "Przychody"],
"Account x Client Relations": ["Konto", "Klient", "Koordynator", "Relacje", "Społeczność"],
"Communications x Media": ["Komunikacja", "Social", "Media", "Treści", "PR", "Copywriting", "Digital"],
"Management x Leadership": ["CEO", "Prezes", "Dyrektor", "Współzałożyciel", "Założyciel", "Szef", "Lider", "Executive"]
  }
};


let groups = profiles["profile1"];

chrome.storage.sync.get(["activeProfile"], (data) => {
  if (data.activeProfile && profiles[data.activeProfile]) {
    groups = profiles[data.activeProfile];
  }
});

function buildMenu() {
  chrome.contextMenus.create({
    id: "mainMenu",
    title: "Вставлятор текста =>",
    contexts: ["editable"]
  });

  chrome.storage.sync.get(["activeProfile"], (data) => {
    const profileId = data.activeProfile || "profile1";

    Object.keys(groups).forEach((title) => {
      chrome.contextMenus.create({
        id: `${profileId}_${title}`,
        parentId: "mainMenu",
        title: title,
        contexts: ["editable"]
      });
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  buildMenu();
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "profileChanged") {
    chrome.storage.sync.get(["activeProfile"], (data) => {
      const key = data.activeProfile;
      groups = profiles[key];

      chrome.contextMenus.removeAll(() => {
        buildMenu();
      });
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const pureId = info.menuItemId.split("_").slice(1).join("_");

  const words = groups[pureId];
  if (!words) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async (list) => {
      const el = document.activeElement;
      if (!el) return;

      const simulateInput = (word) => {
        const inputEvent = new InputEvent("input", {
          data: word,
          inputType: "insertText",
          bubbles: true,
          cancelable: true
        });

        el.value = word;
        el.dispatchEvent(inputEvent);

        el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", keyCode: 13, bubbles: true }));
        el.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter", keyCode: 13, bubbles: true }));
      };

      for (const word of list) {
        simulateInput(word);
        await new Promise((r) => setTimeout(r, 39));
      }
    },
    args: [words]
  });
});