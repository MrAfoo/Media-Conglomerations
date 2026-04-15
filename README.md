# Media Conglomerations

A modern web application exploring the structure, history, and influence of major media conglomerates including **Disney**, **Warner Bros. Discovery**, and **Comcast (NBCUniversal)**.

## Project Overview

This is a **monorepo** project containing a React-based web application that provides informational content about major media companies and their holdings. The application features:

- **Interactive navigation** between different media company profiles
- **Responsive design** with TailwindCSS styling
- **Component-based architecture** using modern React patterns
- **SEO optimization** with React Helmet
- **Smooth animations** using Framer Motion
- **Rich UI components** from Radix UI

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 7.3.1
- **Routing**: React Router DOM 7.13.0
- **Styling**: TailwindCSS 3.4.17
- **UI Components**: Radix UI (Accordion, Dialog, Dropdown Menu, etc.)
- **Icons**: Lucide React
- **Animations**: Framer Motion 11.15.0
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts 2.15.4
- **Notifications**: Sonner 2.0.7

## Project Structure

```
zoha/
├── apps/
│   └── web/                          # Main React application
│       ├── src/
│       │   ├── components/
│       │   │   ├── Header.jsx         # Navigation header
│       │   │   ├── Footer.jsx         # Page footer
│       │   │   ├── ScrollToTop.jsx    # Scroll behavior handler
│       │   │   └── ui/                # Reusable UI components (from Radix UI)
│       │   ├── pages/
│       │   │   ├── HomePage.jsx       # Landing page with company links
│       │   │   ├── DisneyPage.jsx     # Disney company profile
│       │   │   ├── WarnerBrosPage.jsx # Warner Bros. Discovery profile
│       │   │   └── ComcastPage.jsx    # Comcast/NBCUniversal profile
│       │   ├── hooks/                 # Custom React hooks
│       │   ├── lib/                   # Utility functions
│       │   ├── App.jsx                # Main app component
│       │   ├── main.jsx               # Entry point
│       │   └── index.css              # Global styles
│       ├── index.html                 # HTML template
│       ├── vite.config.js             # Vite configuration
│       ├── tailwind.config.js         # TailwindCSS configuration
│       ├── postcss.config.js          # PostCSS configuration
│       └── package.json               # Web app dependencies
├── package.json                       # Root monorepo configuration
└── README.md                          # This file
```

## Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+ (Vite requirement)
- **npm** 9+ or **yarn** 3+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zoha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000/
- **Network**: http://192.168.100.253:3000/ (your network IP)

Press `h + enter` in the terminal for Vite help.

### Build

Build for production:

```bash
npm run build
```

Output: `dist/apps/web/`

### Preview

Preview the production build locally:

```bash
npm run start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint          # Quiet mode
npm run lint:warn     # With warnings
```

## Features

### Pages

1. **Home Page** (`/`)
   - Overview of major media conglomerates
   - Quick navigation to company profiles
   - SEO-optimized landing page

2. **Disney Page** (`/disney`)
   - Information about The Walt Disney Company
   - Film studios, theme parks, and streaming services

3. **Warner Bros. Page** (`/warner-bros`)
   - Details about Warner Bros. Discovery
   - Media conglomerate structure and holdings

4. **Comcast Page** (`/comcast`)
   - Comcast and NBCUniversal information
   - Telecommunications and media integration

### UI Components

The project includes a comprehensive library of reusable UI components:
- Accordion, Alert, Avatar, Badge, Breadcrumb
- Buttons, Calendars, Cards, Carousels, Charts
- Checkboxes, Dialogs, Dropdowns, Forms, Inputs
- Menus, Pagination, Progress Bars, Selects
- Sliders, Tables, Tabs, Toasts, Tooltips
- And many more...

## Key Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Preview production build |
| `npm run lint` | Run ESLint (quiet mode) |
| `npm run lint:warn` | Run ESLint (with warnings) |

## Configuration Files

- **vite.config.js** - Vite build configuration with path alias `@`
- **tailwind.config.js** - TailwindCSS theme configuration
- **postcss.config.js** - PostCSS plugins configuration
- **components.json** - Radix UI component configuration
- **.eslintrc** - ESLint rules

## Path Aliases

The project uses path aliases for cleaner imports:
- `@/` → `src/`

Example:
```javascript
import App from '@/App';
import HomePage from '@/pages/HomePage';
import Button from '@/components/ui/button';
```

## Development Notes

- The project uses **workspaces** for monorepo management
- **Concurrently** is used to run multiple npm scripts in parallel
- **React Router DOM** handles all client-side routing
- **TailwindCSS** is the primary styling solution
- **Radix UI** provides accessible, unstyled component primitives

## Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]

## Support

For issues or questions, please open an issue in the repository.
