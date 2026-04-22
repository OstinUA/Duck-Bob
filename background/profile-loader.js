var profiles = {};

try {
  importScripts(
    'profiles/english.js',
    'profiles/spanish.js',
    'profiles/french.js',
    'profiles/german.js',
    'profiles/portuguese.js',
    'profiles/polish.js',
    'profiles/czech.js',
    'profiles/italian.js',
    'profiles/turkish.js',
    'profiles/japanese.js'
  );
} catch (error) {
  console.error('Failed to load profiles', error);
}

function getProfileById(profileId) {
  return profiles[profileId] || null;
}
