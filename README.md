# Audio-Player-Frontend-HTML-Tailwind-JS

A modern and fully responsive frontend audio player inspired by Spotify, built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

This project focuses on clean UI design, reusable JavaScript architecture, playlist management, responsive sidebar behavior, and interactive audio controls.

---

# Preview

## Desktop
- Responsive playlist layout
- Interactive playbar
- Hover animations
- Dynamic playlists

## Mobile & Tablet
- Fully responsive collapsible sidebar
- Optimized touch interactions
- Adaptive playbar and controls

---

# Features

- Fully responsive UI
- Responsive sidebar for mobile and tablet
- Dynamic playlist rendering
- Audio play/pause functionality
- Previous / Next track controls
- Seekbar support
- Volume controls with dynamic icons
- Marquee animation for long song names
- Custom scrollbar styling
- Playlist cover cards with hover animations
- Dynamic song loading from folders
- Reusable JavaScript utility functions
- Clean folder-based playlist structure

---

# Tech Stack

- HTML5
- Tailwind CSS v4
- Vanilla JavaScript (ES6 Modules)

---

# Project Structure

```bash
Audio-Player-Frontend-HTML-Tailwind-JS/
│
├── src/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   │
│   ├── images/
│   │
│   ├── playlists/
│   │   ├── playlist-name/
│   │   │   ├── cover.jpg
│   │   │   ├── info.json
│   │   │   └── songs...
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── utilities.js
│   │
│   └── index.html
│
└── README.md
```

---

# Responsive Design

This project includes a fully responsive layout across:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

The sidebar automatically adapts based on screen size:

- Desktop → Sidebar remains visible
- Mobile/Tablet → Sidebar toggles using hamburger menu

---

# Audio Player Functionalities

## Play / Pause
The player uses a dedicated `CurrentSong` class for handling playback logic and preventing overlapping executions using a processing lock.

## Dynamic Track Switching
Tracks are dynamically loaded from playlist folders and rendered as clickable song cards.

## Volume Controls
Volume levels automatically update icons depending on intensity:

- Mute
- Low
- Medium
- High

## Seekbar
Interactive seekbar updates in real-time using audio events.

---

# UI Highlights

## Playlist Cards
Animated playlist cards with:
- Hover transitions
- Scaling effects
- Floating play button animation

## Custom Scrollbars
Dark themed custom scrollbars built using Tailwind utility layers.

## Custom Range Slider
Styled audio volume range input with custom thumb and track styling.

---

# JavaScript Architecture

## `main.js`
Handles:
- App initialization
- DOM references
- Event setup
- Playlist loading

## `utilities.js`
Handles:
- Audio player logic
- Playlist rendering
- Sidebar responsiveness
- Playbar events
- Volume controls
- Seekbar logic

---

# How Playlists Work

Each playlist contains:

```bash
playlist-name/
│
├── cover.jpg
├── info.json
├── song1.mp3
├── song2.mp3
└── ...
```

## Example `info.json`

```json
{
  "title": "Chill Beats",
  "description": "Relax and focus with smooth music."
}
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/AnkushSaral/Audio-Player-Frontend-HTML-Tailwind-JS.git
```

## Open Project

```bash
cd Audio-Player-Frontend-HTML-Tailwind-JS
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npx live-server
```

or

```bash
python -m http.server 3000
```

---

# Tailwind Build Command

```bash
npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch
```

---

# Learning Highlights

This project helped in understanding:

- DOM manipulation
- Audio API handling
- Event-driven architecture
- Responsive layouts
- Tailwind CSS workflow
- Modular JavaScript structure
- Dynamic rendering techniques
- Async JavaScript

---

# Future Improvements

- Search functionality
- Real backend integration
- Local storage support
- Shuffle & repeat
- Drag and seek support
- Queue system
- Keyboard shortcuts
- Music progress persistence

---

# Screenshots

## Desktop View

![Desktop View](./Project%20Images/Responsiveness%20PC.png)

---

## Mobile View

![Mobile View](./Project%20Images/Responsiveness%20Mobile.png)

---

## Mobile Sidebar

![Mobile Sidebar](./Project%20Images/Responsiveness%20Mobile%20Sidebar.png)

---

## Tablet View

![Tablet View](./Project%20Images/Responsiveness%20Tablet.png)

---

## Tablet Sidebar

![Tablet Sidebar](./Project%20Images/Responsiveness%20Tablet%20Sidebar.png)

---

# Repository

GitHub Repo:
https://github.com/AnkushSaral/Audio-Player-Frontend-HTML-Tailwind-JS

---

# Author

Developed by Ankush Saral

---

# License

This project is open source and available under the MIT License.