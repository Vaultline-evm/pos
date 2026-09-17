const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withNoInternet(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults.manifest;
    if (Array.isArray(manifest['uses-permission'])) {
      manifest['uses-permission'] = manifest['uses-permission'].filter((permission) => {
        const name = permission?.$?.['android:name'];
        return name !== 'android.permission.INTERNET' && name !== 'android.permission.RECORD_AUDIO';
      });
    }
    return config;
  });
};
