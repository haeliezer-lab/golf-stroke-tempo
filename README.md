<p align="center">
  <img src="icons/icon-192.png" width="96" height="96" alt="Golf Stroke Tempo icon">
</p>

<h1 align="center">Golf Stroke Tempo</h1>

<p align="center">
  A tempo trainer for your golf swing and putting stroke, with a calm box-breathing tab.<br>
  Frame-accurate beeps and lights. Runs in the browser, installs to your home screen, works offline.<br>
  No account, no ads, no tracking.
</p>

<p align="center">
  <b>English</b> · <a href="README.ja.md">日本語</a>
</p>

<p align="center">
  <img src="docs/screenshot.png" width="640" alt="Golf Stroke Tempo in light mode (English) and dark mode (Japanese)">
</p>

---

## Open the app

**`https://<your-username>.github.io/golf-stroke-tempo/`**

*(Replace `<your-username>` with your GitHub username after publishing. See [docs/DEPLOY.md](docs/DEPLOY.md).)*

Open the link on your phone, tap the dial, and swing on the beeps.

## Features

- **Three modes**
  - **Long game** (フルショット): 3:1 tempo. Presets 18/6 · 21/7 · 24/8 · 27/9 · 30/10
  - **Short game** (アプローチ): 2:1 tempo. Presets 14/7 · 16/8 · 18/9 · 20/10 · 22/11
  - **Putting** (パター): 80 or 90 BPM, two beeps (takeaway and impact)
- **Frame-accurate timing.** Presets are video frames at 30 fps. `24/8` means 24 frames back (0.80 s) and 8 frames down (0.27 s).
- **No drift.** Every beep is scheduled ahead on the phone's audio clock, so the rhythm stays exact over hundreds of reps.
- **Lights locked to the beeps.** Every color change happens on a beep, never in between, so what you see and what you hear always agree.
- **Putting pendulum view.** In putting mode, the corner button on the dial switches between **Circle**, **Bar** (backstroke to the right) and **Lefty bar** (backstroke to the left).
- **Two sounds.** Soft **Tone** or sharp **Beep**.
- **Rest between reps.** 1.0, 1.6 or 2.5 seconds.
- **Bluetooth delay.** Wireless earbuds play sound late. Set the delay (0 to 500 ms, steps of 10, or type a number) until the light changes exactly when you hear the beep. Leave it at 0 for wired headphones or the phone speaker.
- **Breathe tab: box breathing.** A calm, pastel-blue second tab: 5·5·5·5, in and out through the nose, with a gentle breath sound, a gong at the start, every minute and after the last set, and short encouraging lines. Set the length in sets or minutes. See [Box breathing](#box-breathing).
- **Focus mode.** Turn your phone sideways and only the timer is shown, as large as the screen allows. Turn it back to change settings.
- **English and Japanese**, light and dark mode (follows your phone), and the screen stays awake while playing.
- **Private.** Everything runs on your phone. Settings are saved only on your device.

<p align="center">
  <img src="docs/states.png" width="560" alt="Full swing during the backswing, and the putting bar at impact">
</p>
<p align="center"><sub>Left: long game, during the backswing. Right: putting bar view at impact.</sub></p>

## How the timing works

### Long game and short game

Each preset is `X/Y` frames at 30 fps (1 frame = 33.3 ms).

| Cue | When | Sound (Tone) | Light |
|---|---|---|---|
| Get ready | just before takeaway | | Pale green |
| Takeaway | `t = 0` | D5 (587 Hz) | Green, ring fills green |
| Top of backswing | `t = X ÷ 30 s` | D5 (587 Hz) | Yellow, ring fills yellow |
| Impact | `t = (X + Y) ÷ 30 s` | A5 (880 Hz), slightly longer | Yellow with a flash |

Then the chosen rest, and the next rep starts. **Beep** uses 1 kHz for takeaway and top and 2 kHz for impact.

### Putting

One beat at the chosen tempo: the first beep starts the stroke and the second beep, one beat later, is impact. At 90 BPM that is 0.67 s from takeaway to impact; at 80 BPM, 0.75 s.

The light is green from the takeaway beep and turns yellow on the impact beep. In the bar views, the putter head travels back for two-thirds of the beat, returns through the impact line exactly on the second beep, then follows through the same distance.

## Box breathing

A calm second tab for settling your nerves before a round or between shots. The pattern is **5·5·5·5**, breathing **in through the nose and out through the nose**.

| Side of the box | You | Sound | Inside the box |
|---|---|---|---|
| Up the left side | **Inhale** through the nose, 5 s | Soft nasal in-breath | Fills from the bottom, its surface level with the light |
| Across the top | **Hold**, 5 s | Silence | Stays full |
| Down the right side | **Exhale** through the nose, 5 s | Soft nasal out-breath | Empties, its surface level with the light |
| Across the bottom | **Hold**, 5 s | Silence | Stays empty |

One trip around the box is one **set** (20 seconds).

- **Length:** choose **Sets** (default 7) or **Minutes** and type a number or use − / +. Minutes always convert to whole sets (3 per minute), and a session **always ends after a complete set**, on the final bottom hold. Changing the length during a session lets the current set finish first.
- **Gong:** at the start, every minute (every 3 sets), and after the last set. The first inhale begins 1.5 seconds after the opening gong.
- **Encouragement:** a short line fades in at each new set, in random order and never the same twice in a row, such as *"Just like practice."*, *"You've got this."* or *"Slow is smooth. Smooth is fast."*
- **Gentle motion:** like a breath, the light moves slowly through each corner and a little faster along the middle of each side. It never stops, and it still reaches every corner exactly on the 5-second mark. Behind it, the light leaves one continuous trail that fades slowly and evenly: brightest at the light, and completely faded by the time the light comes back around, so nothing is ever cut off. After the last set, the trail fades out with the closing gong.
- **Soft, smooth look:** no hard edges anywhere in the box. The light is a soft bead with a faint glow, the trail glows gently and has a rounded start, the track and the inner panel have softened edges, and the fill rises with a soft surface instead of a sharp waterline.
- **Calm colors:** muted, low-saturation blue-grey, light by day and dim at night. Research on color and emotion finds that saturation drives arousal and blue is the least arousing hue, so the tab avoids vivid tones.
- **Sound:** on (gong and breath) or off (light only). Can be switched during a session.
- **Keeps playing with the screen off.** The whole session is built as one audio track (in about 0.1 s) and played as media, so it keeps going when the phone locks or you switch apps: Android in the browser or home-screen app, and iPhone in **Safari**. iOS stops home-screen web apps in the background, so on iPhone use Safari for screen-off sessions. The lock screen shows play and pause, the track also plays with the iPhone silent switch on, and the lights catch up instantly when you come back. If a browser or viewer refuses to play the track as media, the same track plays through Web Audio instead, with identical sounds and timing (only screen-off playback is lost there).
- **Bluetooth delay:** uses the same value you set on the Tempo tab.
- **How to:** the steps are written under the controls, in English and Japanese.
- Turn the phone sideways for the box and the encouragement line only.

The breath sound is modeled on real nasal breathing: broadband airflow shaped by fixed resonances, with no pitch glide, softer highs than mouth breathing, a lighter in-breath and a warmer out-breath, each ending in a smooth fade. The gong is one clean tone per partial, so its long tail fades evenly without wobbling. Every sound sits at an exact sample position in the session track, and the light and countdown follow the track's own clock, so they change together. Starting a breathing session stops the golf timer, and switching back to Tempo stops the breathing.

<p align="center">
  <img src="docs/breathe.png" width="560" alt="Breathe tab in light mode (English) and dark mode (Japanese)">
</p>

## Install it like an app

After the site is live:

- **iPhone:** open the link in **Safari** → Share → **Add to Home Screen**
- **Android:** open the link in **Chrome** → ⋮ → **Install app** (or **Add to Home screen**)

It opens full-screen from its own icon and works without internet after the first visit.

> **iPhone:** turn off the silent switch, or the beeps may not play.

## Publish your own copy

1. Create a **public** repository named `golf-stroke-tempo`.
2. Upload everything in this folder, keeping the `icons/` and `docs/` folders.
3. **Settings → Pages** → Source **Deploy from a branch** → branch `main`, folder `/ (root)` → **Save**.
4. About a minute later the app is live at `https://<your-username>.github.io/golf-stroke-tempo/`.

Step-by-step guide, updating and troubleshooting: **[docs/DEPLOY.md](docs/DEPLOY.md)**

## Project structure

```
golf-stroke-tempo/
├── index.html             The whole app: markup, styles and script in one file
├── manifest.webmanifest   App name, icon and colors used by "Add to Home Screen"
├── sw.js                  Service worker that caches the app for offline use
├── icons/                 App icons: 192, 512, maskable 512, Apple 180
├── docs/
│   ├── DEPLOY.md          GitHub Pages setup and update guide (English and Japanese)
│   ├── screenshot.png
│   └── states.png
├── .nojekyll              Tells GitHub Pages to serve the files as they are
├── README.md
├── README.ja.md
└── LICENSE                CC0 1.0 (public domain)
```

No build step, no frameworks, no dependencies. All paths are relative, so it works at any address, including a GitHub Pages project URL or a custom domain.

## Run it locally

Opening `index.html` directly works for a quick look. Offline mode and installing only work over `https://` or `localhost`:

```bash
cd golf-stroke-tempo
python3 -m http.server 8000
# open http://localhost:8000
```

## Updating

Edit, commit and push. Phones load the newest page whenever they have internet, so changes show up the next time the app is opened (if a phone had an older copy, open it twice).

If you change an **icon**, also bump `VERSION` in `sw.js`:

```js
const VERSION = 'golf-stroke-tempo-v3';   // was v2
```

## Browser support

Current Safari (iOS 15 and later), Chrome, Edge and Firefox. Uses the Web Audio API for timing, the Screen Wake Lock API where available, and a service worker for offline use.

## Privacy

- No accounts, analytics, ads or cookies.
- Settings (language, mode, preset, sound, rest, Bluetooth delay, putting view, breathing options and last tab) are stored in your browser on your device only.
- The only outside request is to Google Fonts for the typefaces. After the first visit they are cached for offline use; if they can't load, system fonts are used.

## License

**Public domain (CC0 1.0).** Free to use, copy, modify and share for any purpose without asking. See [LICENSE](LICENSE).

If it helps your game, let Hans know. He'd be very happy to hear it.
