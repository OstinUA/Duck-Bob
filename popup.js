const langConfig = {
  en: [
    { id: "profile1", label: "Main", icon: "📄" },
    { id: "profile2", label: "Relevant", icon: "🎯" },
    { id: "profile3", label: "Mix All", icon: "📚" }
  ],
  fr: [
    { id: "profile5", label: "Principal", icon: "🇫🇷" }
  ]
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