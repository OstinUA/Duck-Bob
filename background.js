var profiles = {}; 

try {
  importScripts('profiles/en.js', 'profiles/fr.js');
} catch (e) {
  console.error("Error importing profiles:", e);
}

let groups = profiles["profile1"] || {}; // Default

chrome.storage.sync.get(["activeProfile"], (data) => {
  if (data.activeProfile && profiles[data.activeProfile]) {
    groups = profiles[data.activeProfile];
  }
  buildMenu();
});

function buildMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "mainMenu",
      title: "Вставлятор текста =>",
      contexts: ["editable"]
    });

    if (!groups || Object.keys(groups).length === 0) return;

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
  });
}

chrome.runtime.onInstalled.addListener(() => {
  buildMenu();
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "profileChanged") {
    chrome.storage.sync.get(["activeProfile"], (data) => {
      const key = data.activeProfile;
      if (profiles[key]) {
        groups = profiles[key];
        buildMenu();
      }
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {

  const firstUnderscoreIndex = info.menuItemId.indexOf('_');
  if (firstUnderscoreIndex === -1) return;
  
  const categoryKey = info.menuItemId.substring(firstUnderscoreIndex + 1);

  const words = groups[categoryKey];
  
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