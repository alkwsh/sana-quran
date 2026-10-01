# Sana Quran website

Standalone Arabic/English product website and privacy policy for Sana Quran. Static HTML, CSS and JavaScript; no analytics, ads, form backend or external JavaScript dependency. Hosting target: GitHub Pages, `main` branch, repository root.

Run locally: `python3 -m http.server 8768`.

- `index.html`: product landing page.
- `privacy.html` and `privacy-content.js`: full in-app privacy disclosure, last updated 1 October 2026. Update both the readable HTML default and the bilingual data when app policy changes.
- `app.js`: language/theme choices, real screenshot switching and progressive motion. Preferences stay in browser local storage. Reduced Motion disables reveal effects.
- `styles.css`: Sana neutral palette, typography, responsive cards and device layouts.
- `assets`: locally served app fonts, native app-icon renders, real app screenshots, approved Apple product frames and the official unmodified App Store badge.

The App Store badge deliberately has no link while the app is in testing. Add the final public App Store URL only after release approval. Internal preview/test data are not published here. The live page does not link to the repository or its owner's GitHub profile. Contact: Aboutmuslimapp@gmail.com. X: https://x.com/hdr74.

## Content and artwork

App screens and icons are Sana's actual interface. Review screenshots use a presentation-only demonstration fixture; they are not an accuracy benchmark. The Quran sample is copied exactly from the application's owned Uthmanic Hafs source, Al-Fatihah 1:2, King Fahd Glorious Qur'an Printing Complex. No Quran text is generated.

Apple iPhone 18 Pro product bezels were obtained from Apple Design Resources on 1 October 2026; resource agreement approved by the owner. Product frames and App Store badge remain Apple's artwork, used only to present Sana on Apple devices. Sources: https://developer.apple.com/design/resources/ and https://developer.apple.com/app-store/marketing/guidelines/.

TheSans Arabic, Uthmanic Hafs and the Noto Kufi-derived long-text font are the owner-supplied application faces; no general font redistribution license is granted by this repository. The Noto-derived face retains its SIL Open Font License notice in `assets/long-text-OFL.txt`. App screenshot scene thumbnails retain their underlying source rights. This repository does not grant a blanket license to Apple assets, fonts, Quran/tafsir source material or scene media.
