# Vaultline

Vaultline is an Expo/React Native mobile workspace based on the original `vaultline.html` prototype. The mobile app currently includes the dashboard, wallet overview, assets, send review flow, receive address view, transaction history filters, wallet switching, and security-management screens.

## Run locally

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or use `npm run android` when an Android emulator/device is available.

## Build an Android APK

The project is linked to EAS project `34aab6a2-48b3-4924-bafb-b954b91ad28b`.

```bash
npm install --global eas-cli
eas login
eas build --platform android --profile preview
```

The `preview` profile is configured to produce an installable APK. The `production` profile is configured for an Android App Bundle suitable for store submission.

## Current implementation notes

The original HTML prototype is retained as `vaultline.html` for reference. The mobile UI is implemented in `App.js` with native React Native components rather than a WebView. The next integration step is to connect the existing EVM/ethers logic to secure native storage, clipboard, QR scanning/generation, and live RPC calls using Expo-compatible packages. Private keys and recovery phrases must never be placed in source code or committed to Git.
