const fs = require('fs');
const path = require('path');
const { withDangerousMod } = require('@expo/config-plugins');

module.exports = function withNoInternet(config) {
  return withDangerousMod(config, ['android', async (config) => {
    const manifestPath = path.join(config.modRequest.platformProjectRoot, 'app/src/main/AndroidManifest.xml');
    if (fs.existsSync(manifestPath)) {
      let xml = fs.readFileSync(manifestPath, 'utf8');
      xml = xml.replace(/\s*<uses-permission[^>]+android:name="android\.permission\.(?:INTERNET|RECORD_AUDIO)"[^>]*\/>/g, '');
      fs.writeFileSync(manifestPath, xml);
    }
    return config;
  }]);
};
