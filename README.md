# Arcto - Modern Presentation Remote Control

<p align="center">
  <img src="./public/arcto.png" alt="Arcto Logo" width="120" height="120">
</p>

## Overview

Arcto is a modern, feature-rich presentation remote control application that allows users to wirelessly control presentations, media playback, and more from their mobile devices. The project is structured as a monorepo containing multiple applications:

- **Remote PWA**: A Progressive Web App that serves as the remote control interface on mobile devices
- **Electron Controller**: A desktop application that receives commands from the remote
- **Landing Page**: A modern, responsive website showcasing Arcto's features and providing download links

## Features

### Remote Control Capabilities

- **Presentation Navigation**: Easily navigate through slides with intuitive forward/back controls
- **Media Controls**: Play, pause, rewind, and fast-forward media content
- **Volume Management**: Adjust volume levels directly from your mobile device
- **Fullscreen Toggle**: Enter or exit fullscreen mode remotely

### User Experience

- **Modern UI**: Clean, minimalist interface with smooth animations and transitions
- **Dark Mode Support**: Comfortable viewing in any lighting condition
- **Connection Status**: Visual indicators for connection state (connected, connecting, disconnected)
- **Power Toggle**: Turn the controller on/off remotely
- **Responsive Design**: Works seamlessly on various mobile device sizes

### Technical Features

- **Wireless Control**: No physical connection needed between devices
- **Cross-Platform**: Works across different operating systems (Windows currently available, macOS and Linux coming soon)
- **Progressive Web App**: Install the remote control on your mobile device for quick access
- **Low Latency**: Minimal delay between command and execution

## Project Structure

```
/
├── apps/
│   ├── electron-controller/  # Desktop application
│   ├── landing-page/         # Marketing website (Next.js)
│   └── remote-pwa/           # Remote control interface (React)
├── shared/                   # Shared utilities and components
└── public/                   # Public assets
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Development

#### Remote PWA

```bash
cd apps/remote-pwa
npm install
npm run dev
```

#### Landing Page

```bash
cd apps/landing-page
npm install
npm run dev
```

#### Electron Controller

```bash
cd apps/electron-controller
npm install
npm run dev
```

## Building for Production

### Remote PWA

```bash
cd apps/remote-pwa
npm run build
```

### Landing Page

```bash
cd apps/landing-page
npm run build
```

### Electron Controller

```bash
cd apps/electron-controller
npm run build
```

## Usage

1. Download and install the Electron Controller application on your computer
2. Launch the application
3. Open the Remote PWA on your mobile device
4. Enter the IP address shown in the Electron Controller
5. Connect and start controlling your presentations

## Technologies

- **Frontend**: React, Next.js, Tailwind CSS, Framer Motion
- **Desktop**: Electron
- **Build Tools**: Vite, TypeScript

## License

This project is proprietary software.

## Contact

For support or inquiries, please visit our website or contact us through the provided channels on the landing page.
