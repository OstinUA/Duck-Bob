function getProfilesForLanguage(languageCode) {
  const profiles = LANGUAGE_PROFILES[languageCode];
  return Array.isArray(profiles) ? profiles : [];
}

function initializeLanguageSelector() {
  const languageButtons = document.querySelectorAll('.lang-select');

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const languageCode = button.dataset.lang;
      const profiles = getProfilesForLanguage(languageCode);

      if (profiles.length === 0) {
        return;
      }

      renderProfileButtons(profiles, handleProfileSelection);
      setStepVisibility(false);
    });
  });
}

async function handleProfileSelection(profileId, selectedButton) {
  try {
    await saveActiveProfile(profileId);
    await notifyProfileChanged();

    if (selectedButton instanceof HTMLElement) {
      selectedButton.classList.add('active');
    }

    setTimeout(() => window.close(), POPUP_DEFAULTS.PROFILE_CLOSE_DELAY_MS);
  } catch (error) {
    console.error('Failed to select profile', error);
  }
}

function initializeBackButton() {
  const backButton = document.getElementById('back-btn');
  backButton.addEventListener('click', () => setStepVisibility(true));
}

document.addEventListener('DOMContentLoaded', () => {
  initializeLanguageSelector();
  initializeBackButton();
});
