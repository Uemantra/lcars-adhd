# 🖖 LCARS · ADHD COMMAND

> *"Things are only impossible until they're not."* — Capt. Jean-Luc Picard

A personal command center for **ADHD & autism**, dressed up as the LCARS computer
from the bridge of a starship. Tasks, focus timers, routines, sensory tracking,
and in-the-moment regulation tools — wrapped in glowing orange elbows, beeping
consoles, and just enough Star Trek to make showing up for yourself feel like
a mission worth engaging.

It runs entirely in your browser, works offline, and keeps **all your data on
your own device**. No accounts. No cloud. No tracking. No telemetry. Just you
and the ship's computer.

```
┌─ STARDATE 2026.171 ──────────────────────────────────┐
│  STATUS: NOMINAL   ENERGY: GOOD   3 TASKS PENDING     │
└──────────────────────────────────────────────────────┘
```

---

## ✨ Why this exists

Most productivity apps are built for neurotypical brains: tidy lists, quiet
interfaces, and an unspoken assumption that you'll *just remember* to drink
water and start that thing. This one is built for brains that need a little
more **dopamine, structure, and sensory awareness** — and a lot less shame.

Everything here is designed around real ADHD/autism needs:

- **Low friction** — one tap to log a mood, add a task, or take a breath.
- **Immediate feedback** — satisfying sounds, haptics, and confetti, because
  a reward you feel *now* beats a reward you're promised later.
- **Gentle, not nagging** — the app celebrates wins and never scolds you for
  an off day. Streaks hold through a slow start; routines reset clean each morning.
- **Sensory-aware** — track your sensory load, spot overwhelm early, and jump
  straight to a calming protocol with the always-visible **SOS** button.

---

## 🚀 Features

### The bridge stations
| Station | What it does |
|---|---|
| 🏠 **Command Center** | Mood check-in, energy level, hydration & meds tracker, quick task capture, and a running list of today's **wins**. |
| ✓ **Mission Log** | Tasks with priority + category, filters, and a one-tap done with a little buzz of satisfaction. |
| ◷ **Temporal Reg.** | A focus/break timer (Pomodoro-style) with presets, custom lengths, a glowing countdown ring, and session logging. |
| ☰ **Daily Protocol** | Morning, evening, and fully custom routines that reset every day. Check off steps; finish them all for a celebration. |
| ◎ **Sensory Array** | Rate six sensory channels, watch your live **overwhelm meter**, and log how you're doing over time. |
| ♥ **Emergency Protocols** | Guided breathing (Box & 4-7-8) and a searchable library of grounding, movement, and cognitive regulation strategies. |
| ✎ **Neural Buffer** | A frictionless brain-dump for thoughts — plus a 🖖 **Captain's Log** button that stardates your entry. |
| ⬢ **Holodeck** | Your rec room. Star Trek lore, two tiny games, and your Starfleet service record (see below). |
| ⚙ **System Config** | Sound, haptics, themes, accessibility, and data backup. |

### 🎖 Starfleet Service Record
Real productivity earns rank. Focus sessions, completed tasks, finished
routines, and logged wins accrue **merit points** — and you climb the ranks
from **Cadet → Crewman → Ensign → … → Captain → Admiral**. Promotions come with
confetti, a chime, and a field-promotion dispatch from Starfleet Command. 🥳

### 🛸 The Holodeck games
- **🎛 Bridge Drill** — a Simon-style memory game played on glowing LCARS
  console pads, each with its own musical tone. How long a sequence can you hold?
- **🚨 Red Alert Reflex** — wait for green, then tap as fast as you can.
  (Jump the gun and the computer *will* judge you.)

### 🔊 Sound & feel
- A fully synthesized **LCARS sound engine** (Web Audio — no audio files) with
  distinct beeps and chirps for navigating, confirming, completing, and more.
- **Haptic feedback** on the moments that matter.
- An LCARS **boot sequence** on launch, complete with startup chime.
- **Confetti** when you win, hydrate, finish a routine, or wrap a focus session.

### 🎨 Make it yours
- Five **LCARS color themes**: Classic Amber, Deep Amber, Okudagram Blue,
  Medical Green, and Nebula Mauve.
- **Accessibility**: Reduce Motion, Large Text, adjustable sound volume, and
  full sound/haptic toggles.

---

## ⌨️ Keyboard shortcuts

| Key | Action |
|---|---|
| `H` `T` `P` `R` `S` `G` `N` | Jump to Home / Tasks / Timer (P) / Routine / Sensory / Regulate (G) / Notes |
| `Space` | Start / pause the focus timer (when on the Timer screen) |
| `↑ ↑ ↓ ↓ ← → ← → B A` | *...the ship's computer might have a surprise for you.* 🚨 |

---

## 📱 Run it

It's a single self-contained `index.html` — no build step, no dependencies.

**Just open it:** download the repo and open `index.html` in any modern browser.

**Or serve it locally** (recommended, so the offline/PWA features work):

```bash
# from the project folder
python3 -m http.server 8080
# then visit http://localhost:8080
```

**Install it as an app:** open it in a mobile or desktop browser and choose
*"Add to Home Screen"* / *"Install"*. It's a full **Progressive Web App** — it
installs, launches fullscreen, and works completely offline thanks to a service
worker.

> 💡 After an update, do a hard refresh (or reopen the installed app) so the new
> service-worker cache takes effect.

---

## 🔐 Your data

- Stored **only** on your device, in `localStorage`. Nothing is ever sent anywhere.
- **Export / Import** backups as JSON from *System Config → Data Management* —
  do this before clearing your browser or switching phones.
- **Erase All Data** is there too, for a clean slate whenever you want one.

---

## 🛠 Built with

Plain **HTML, CSS, and vanilla JavaScript** — no frameworks, no bundler, no
npm install. Web Audio for sound, the Vibration API for haptics, and a service
worker + web manifest for offline PWA support. The whole ship fits in one file.

---

## 💛 A gentle note

This is a self-management and wellbeing tool, **not medical advice or a
substitute for professional care**. If you're struggling, please reach out to a
qualified clinician or a crisis line in your area. Be kind to yourself — a small
step today is still a step closer than yesterday.

---

<div align="center">

**Live long and prosper.** 🖖

*Made with care for brains that work a little differently.*

</div>
