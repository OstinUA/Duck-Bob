const buttons = document.querySelectorAll(".profile-btn");

chrome.storage.sync.get(["activeProfile"], (data) => {
  const currentProfile = data.activeProfile || "profile1";
  
  buttons.forEach(btn => {
    if (btn.dataset.value === currentProfile) {
      btn.classList.add("active");
    }
  });
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const newValue = btn.dataset.value;

    chrome.storage.sync.set({ activeProfile: newValue });
    chrome.runtime.sendMessage({ type: "profileChanged" });

    setTimeout(() => {
       window.close();
    }, 150);
  });
});