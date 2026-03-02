const langConfig = {
  en: [ //english
    { id: "profile1", label: "Main", icon: "📄" },
    { id: "profile2", label: "Relevant", icon: "🎯" },
	{ id: "profile3", label: "Relevant", icon: "🎯" },
    { id: "profile4", label: "Mix All", icon: "📚" }
  ],
    es: [ //spanish
    { id: "profile5", label: "Main", icon: "📄" },
    { id: "profile6", label: "Relevant", icon: "🎯" },
	{ id: "profile7", label: "Relevant", icon: "🎯" },
    { id: "profile8", label: "Mix All", icon: "📚" }
  ],
    fr: [ //french
    { id: "profile9", label: "Main", icon: "📄" },
    { id: "profile10", label: "Relevant", icon: "🎯" },
	{ id: "profile11", label: "Relevant", icon: "🎯" },
    { id: "profile12", label: "Mix All", icon: "📚" }
  ],
    de: [ //german
    { id: "profile13", label: "Main", icon: "📄" },
    { id: "profile14", label: "Relevant", icon: "🎯" },
	{ id: "profile15", label: "Relevant", icon: "🎯" },
    { id: "profile16", label: "Mix All", icon: "📚" }
  ],
    pt: [ //portuguese
    { id: "profile17", label: "Main", icon: "📄" },
    { id: "profile18", label: "Relevant", icon: "🎯" },
	{ id: "profile19", label: "Relevant", icon: "🎯" },
    { id: "profile20", label: "Mix All", icon: "📚" }
  ],
    pl: [ //polish
    { id: "profile21", label: "Main", icon: "📄" },
    { id: "profile22", label: "Relevant", icon: "🎯" },
	{ id: "profile23", label: "Relevant", icon: "🎯" },
    { id: "profile24", label: "Mix All", icon: "📚" }
  ],
    cs: [ //czech
    { id: "profile25", label: "Main", icon: "📄" },
    { id: "profile26", label: "Relevant", icon: "🎯" },
	{ id: "profile27", label: "Relevant", icon: "🎯" },
    { id: "profile28", label: "Mix All", icon: "📚" }
  ],
    it: [ //italian
    { id: "profile29", label: "Main", icon: "📄" },
    { id: "profile30", label: "Relevant", icon: "🎯" },
	{ id: "profile31", label: "Relevant", icon: "🎯" },
    { id: "profile32", label: "Mix All", icon: "📚" }
  ],
    tr: [ //turkish
    { id: "profile33", label: "Main", icon: "📄" },
    { id: "profile34", label: "Relevant", icon: "🎯" },
	{ id: "profile35", label: "Relevant", icon: "🎯" },
    { id: "profile36", label: "Mix All", icon: "📚" }
  ],
    ja: [ //japanese
    { id: "profile37", label: "Main", icon: "📄" },
    { id: "profile38", label: "Relevant", icon: "🎯" },
	{ id: "profile39", label: "Relevant", icon: "🎯" },
    { id: "profile40", label: "Mix All", icon: "📚" }
  ],
};

const stepLang = document.getElementById("step-lang");
const stepProfile = document.getElementById("step-profile");
const profileContainer = document.getElementById("profile-container");
const backBtn = document.getElementById("back-btn");

document.querySelectorAll(".lang-select").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    showProfiles(lang);
  });
});

function showProfiles(lang) {
  profileContainer.innerHTML = "";
  const profiles = langConfig[lang];
  
  if (!profiles) return;

  profiles.forEach(p => {
    const div = document.createElement("div");
    div.className = "btn profile-btn";
    div.dataset.value = p.id;
    div.innerHTML = `<div class="icon">${p.icon}</div><div class="label">${p.label}</div>`;
    
    div.addEventListener("click", () => selectProfile(p.id));
    profileContainer.appendChild(div);
  });

  stepLang.classList.add("hidden");
  stepProfile.classList.remove("hidden");
}

function selectProfile(profileId) {
  chrome.storage.sync.set({ activeProfile: profileId });
  chrome.runtime.sendMessage({ type: "profileChanged" });
  
  const btn = document.querySelector(`.profile-btn[data-value="${profileId}"]`);
  if(btn) btn.classList.add("active");

  setTimeout(() => window.close(), 150);
}

backBtn.addEventListener("click", () => {
  stepProfile.classList.add("hidden");
  stepLang.classList.remove("hidden");
});