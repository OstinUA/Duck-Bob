const menuIdMap = new Map();

function buildMenuItemId(profileId, categoryKey, index) {
  const normalizedCategory = String(categoryKey).replace(/\s+/g, '_').slice(0, 24);
  return `item_${profileId}_${index}_${normalizedCategory}`;
}

function safeRemoveAllContextMenus() {
  return new Promise((resolve) => {
    chrome.contextMenus.removeAll(() => resolve());
  });
}

function createContextMenuItem(createProperties) {
  return new Promise((resolve) => {
    chrome.contextMenus.create(createProperties, () => resolve());
  });
}

function getActiveProfileId() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['activeProfile'], (data) => {
      const profileId = data.activeProfile;
      resolve(typeof profileId === 'string' && profileId.trim() ? profileId : EXTENSION_DEFAULTS.ACTIVE_PROFILE_ID);
    });
  });
}

async function refreshContextMenus() {
  const profileId = await getActiveProfileId();
  const activeProfile = getProfileById(profileId) || getProfileById(EXTENSION_DEFAULTS.ACTIVE_PROFILE_ID);

  menuIdMap.clear();
  await safeRemoveAllContextMenus();

  if (!activeProfile || typeof activeProfile !== 'object') {
    return;
  }

  await createContextMenuItem({
    id: MENU_IDS.ROOT,
    title: 'Text Inserter =>',
    contexts: ['editable']
  });

  const categories = Object.entries(activeProfile);

  for (let index = 0; index < categories.length; index += 1) {
    const [categoryKey] = categories[index];
    const itemId = buildMenuItemId(profileId, categoryKey, index);

    menuIdMap.set(itemId, {
      profileId,
      categoryKey
    });

    await createContextMenuItem({
      id: itemId,
      parentId: MENU_IDS.ROOT,
      title: categoryKey,
      contexts: ['editable']
    });
  }
}

function resolveMenuAction(menuItemId) {
  if (typeof menuItemId !== 'string') {
    return null;
  }

  return menuIdMap.get(menuItemId) || null;
}
