const langConfig = {
  en: [
    { id: "profile1", label: "Main", icon: "📄" },
    { id: "profile2", label: "Relevant", icon: "🎯" },
    { id: "profile3", label: "Mix 1", icon: "🧩" },
    { id: "profile4", label: "Mix 2", icon: "📚" }
  ],
  es: [
    { id: "profile5", label: "Principal", icon: "📄" },
    { id: "profile6", label: "Relevante", icon: "🎯" },
    { id: "profile7", label: "Mezcla 1", icon: "🧩" },
    { id: "profile8", label: "Mezcla 2", icon: "📚" }
  ],
  fr: [
    { id: "profile9", label: "Principal", icon: "📄" },
    { id: "profile10", label: "Pertinent", icon: "🎯" },
    { id: "profile11", label: "Mix 1", icon: "🧩" },
    { id: "profile12", label: "Mix 2", icon: "📚" }
  ],
  de: [
    { id: "profile13", label: "Hauptprofil", icon: "📄" },
    { id: "profile14", label: "Relevant", icon: "🎯" },
    { id: "profile15", label: "Mix 1", icon: "🧩" },
    { id: "profile16", label: "Mix 2", icon: "📚" }
  ],
  pt: [
    { id: "profile17", label: "Principal", icon: "📄" },
    { id: "profile18", label: "Relevante", icon: "🎯" },
    { id: "profile19", label: "Mix 1", icon: "🧩" },
    { id: "profile20", label: "Mix 2", icon: "📚" }
  ],
  pl: [
    { id: "profile21", label: "Główny", icon: "📄" },
    { id: "profile22", label: "Istotny", icon: "🎯" },
    { id: "profile23", label: "Mix 1", icon: "🧩" },
    { id: "profile24", label: "Mix 2", icon: "📚" }
  ],
  cs: [
    { id: "profile25", label: "Hlavní", icon: "📄" },
    { id: "profile26", label: "Relevantní", icon: "🎯" },
    { id: "profile27", label: "Mix 1", icon: "🧩" },
    { id: "profile28", label: "Mix 2", icon: "📚" }
  ],
  it: [
    { id: "profile29", label: "Principale", icon: "📄" },
    { id: "profile30", label: "Rilevante", icon: "🎯" },
    { id: "profile31", label: "Mix 1", icon: "🧩" },
    { id: "profile32", label: "Mix 2", icon: "📚" }
  ],
  tr: [
    { id: "profile33", label: "Ana", icon: "📄" },
    { id: "profile34", label: "İlgili", icon: "🎯" },
    { id: "profile35", label: "Karışık 1", icon: "🧩" },
    { id: "profile36", label: "Karışık 2", icon: "📚" }
  ],
  ja: [
    { id: "profile37", label: "メイン", icon: "📄" },
    { id: "profile38", label: "関連", icon: "🎯" },
    { id: "profile39", label: "ミックス 1", icon: "🧩" },
    { id: "profile40", label: "ミックス 2", icon: "📚" }
  ]
};

const stepLang = document.getElementById("step-lang");
const stepProfile = document.getElementById("step-profile");
const profileContainer = document.getElementById("profile-container");
const backBtn = document.getElementById("back-btn");

document.querySelectorAll(".lang-select").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    showProfiles(lang);
  });
});

function showProfiles(lang) {
  profileContainer.innerHTML = "";
  const profiles = langConfig[lang];

  if (!profiles) return;

  profiles.forEach((p) => {
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
  if (btn) btn.classList.add("active");

  setTimeout(() => window.close(), 150);
}

backBtn.addEventListener("click", () => {
  stepProfile.classList.add("hidden");
  stepLang.classList.remove("hidden");
});
