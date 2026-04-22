function saveActiveProfile(profileId) {
  return new Promise((resolve, reject) => {
    if (typeof profileId !== 'string' || !profileId.trim()) {
      reject(new Error('Invalid profile id'));
      return;
    }

    chrome.storage.sync.set({ activeProfile: profileId }, () => {
      const error = chrome.runtime.lastError;
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

function notifyProfileChanged() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'profileChanged' }, () => resolve());
  });
}
