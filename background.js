importScripts(
  'background/config.js',
  'background/profile-loader.js',
  'background/context-menu.js',
  'background/injector.js'
);

async function initializeExtension() {
  await refreshContextMenus();
}

chrome.runtime.onInstalled.addListener(() => {
  initializeExtension();
});

chrome.runtime.onStartup.addListener(() => {
  initializeExtension();
});

chrome.runtime.onMessage.addListener((message) => {
  if (message && message.type === MESSAGE_TYPES.PROFILE_CHANGED) {
    refreshContextMenus();
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const action = resolveMenuAction(info.menuItemId);
  if (!action || !tab || !Number.isInteger(tab.id)) {
    return;
  }

  const selectedProfile = getProfileById(action.profileId);
  if (!selectedProfile) {
    return;
  }

  const words = selectedProfile[action.categoryKey];
  if (!Array.isArray(words) || words.length === 0) {
    return;
  }

  runInsertWordsScript(tab.id, words);
});
