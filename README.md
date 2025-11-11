# Dutchje PWA

A modern Progressive Web App built with React, Vite, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **vite-plugin-pwa** - PWA support with service worker

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components
├── lib/
│   └── utils.ts     # Utility functions (cn helper)
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles with Tailwind
```

## Adding shadcn/ui Components

To add new shadcn/ui components, you can use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## PWA Features

This app is configured as a Progressive Web App with:

- Service worker for offline support
- Web app manifest
- Auto-update on new versions
- Installable on mobile and desktop

The PWA configuration is in `vite.config.ts` using `vite-plugin-pwa`.

## Path Aliases

The project uses path aliases for cleaner imports:

- `@/components` - React components
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks

## License

MIT
