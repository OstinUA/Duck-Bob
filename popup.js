const select = document.getElementById("profileSelect");

// Загружаем активный профиль при открытии popup
chrome.storage.sync.get(["activeProfile"], (data) => {
  if (data.activeProfile) {
    select.value = data.activeProfile;
  }
});

// Сохраняем выбранный профиль
select.addEventListener("change", () => {
  chrome.storage.sync.set({ activeProfile: select.value });

  // сообщаем background.js что профиль изменился
  chrome.runtime.sendMessage({ type: "profileChanged" });
});
