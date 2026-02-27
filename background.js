var profiles = {};

try {
  importScripts('profiles/en.js', 'profiles/fr.js');
} catch (e) {
  console.error(e);
}

function updateContextMenu() {
  chrome.storage.sync.get(["activeProfile"], (data) => {
    const profileId = data.activeProfile || "profile1";
    const currentData = profiles[profileId] || profiles["profile1"];

    if (!currentData) return;

    chrome.contextMenus.removeAll(() => {
      if (chrome.runtime.lastError) {}

      chrome.contextMenus.create({
        id: "mainMenu",
        title: "Вставлятор текста =>",
        contexts: ["editable"]
      });

      Object.keys(currentData).forEach((key) => {
        chrome.contextMenus.create({
          id: `${profileId}_${key}`,
          parentId: "mainMenu",
          title: key,
          contexts: ["editable"]
        });
      });
    });
  });
}

chrome.runtime.onInstalled.addListener(updateContextMenu);
chrome.runtime.onStartup.addListener(updateContextMenu);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "profileChanged") {
    updateContextMenu();
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const firstUnderscoreIndex = info.menuItemId.indexOf('_');
  if (firstUnderscoreIndex === -1) return;

  const profileId = info.menuItemId.substring(0, firstUnderscoreIndex);
  const categoryKey = info.menuItemId.substring(firstUnderscoreIndex + 1);

  const selectedProfile = profiles[profileId];
  if (!selectedProfile) return;

  const words = selectedProfile[categoryKey];
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