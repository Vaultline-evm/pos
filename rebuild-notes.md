# Vaultline rebuild notes

The attached `vaultline.html` is the source of truth. It is a full desktop wallet workspace, not a static mockup. It loads ethers 6.13.4 and QRCode, defines real wallet lifecycle flows, EVM RPC balance synchronization, CoinGecko pricing, transaction history, fee estimation, unsigned transaction export, local signing, broadcast, pending transaction replacement/cancel, wallet import/create/watch-only modes, encrypted local secrets, QR handling, language/theme controls, and modal-based wallet management.

The current Expo `App.js` is only a visual prototype and must not be treated as the product implementation. It contains invented wallets, balances, addresses, activity rows, and placeholder QR/UI behavior. Those fabricated values must be removed. The next implementation must use empty state until a user creates/imports a wallet, then derive all balances and history from the original logic or an explicitly ported native equivalent.

The visual source uses the palette paper #f5f2eb, sheet #fffdf8, ink #18211f, blue #2463eb, sage #2e8b73, copper #bd6b4c, Fraunces/DM Sans typography, a sidebar workspace layout, dashboard, send, receive, history, watch/unsigned transaction, and wallet management modal flows.
