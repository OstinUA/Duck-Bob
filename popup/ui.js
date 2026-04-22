function renderProfileButtons(profileEntries, onProfileSelected) {
  const profileContainer = document.getElementById('profile-container');
  profileContainer.textContent = '';

  profileEntries.forEach((profile) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn profile-btn';
    button.dataset.value = profile.id;
    button.innerHTML = `<div class="icon">${profile.icon}</div><div class="label">${profile.label}</div>`;

    button.addEventListener('click', () => {
      onProfileSelected(profile.id, button);
    });

    profileContainer.appendChild(button);
  });
}

function setStepVisibility(isLanguageStepVisible) {
  const languageStep = document.getElementById('step-lang');
  const profileStep = document.getElementById('step-profile');

  languageStep.classList.toggle('hidden', !isLanguageStepVisible);
  profileStep.classList.toggle('hidden', isLanguageStepVisible);
}
