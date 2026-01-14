# Shopping List (Frontend)

React + TypeScript frontend for the Shopping List app. Built with Vite and a small, component-driven UI to manage shopping items via a REST API.

## 🚀 Features

- ✅ Browse, add, update, and delete shopping items (CRUD)
- ⚡ Fast development with [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- 🧩 Small, reusable UI components (ui/ folder)
- 🔗 Type-safe API layer (src/api)

## 📋 Prerequisites

- Node.js v18+
- npm or yarn
- Running [backend API](https://github.com/philippspitzley/shopping-list-backend) (default: http://localhost:3000)

## 🛠️ Installation

1. Clone repository

```bash
git clone https://github.com/philippspitzley/shopping-list-frontend.git &&
cd shopping-list-frontend
```

2. Install dependencies

```bash
npm install
```

3. Setup environment variables
   Create a `.env` file (optional) to override defaults:

```bash
cp .env.example .env
```

## 🚀 Getting Started

Start the dev server (Vite):

```bash
npm run dev
```

The app default runs on `http://localhost:5173`.

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## 📚 Available Scripts

| Script            | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start dev server with hot reload (vite)                            |
| `npm run build`   | Build production assets (tsc -b && vite build)                     |
| `npm run preview` | Preview production build locally (vite preview)                    |
| `npm run lint`    | Lint code (`eslint .`)                                             |
| `npm run format`  | Format code (`prettier . --write`)                                 |
| `npm run check`   | Run linter + formatter fixes (`eslint --fix` + `prettier --write`) |
| `npm run prepare` | Install git hooks (`simple-git-hooks`)                             |

**Git hooks & pre-commit**

This project uses `simple-git-hooks` + `nano-staged` to run formatting/linting on staged files. The current config runs:

```json
"*.{js,ts,tsx,css,json}": ["prettier --write", "eslint --fix"]
```

(See `package.json` for the exact setup.)

---

## ⚙️ API

The frontend talks to a backend REST API. By default it expects an API base URL available in `VITE_API_URL` (e.g. `http://localhost:3000`). The API endpoints used are similar to:

- `GET /api/items` - list items
- `POST /api/items` - create item
- `PATCH /api/items/:id` - update item
- `DELETE /api/items/:id` - delete item

Check `src/api/itemAPI.ts` and `src/api/types.ts` for implementation details.

## 🏗️ Project Structure

```
src/
├── api/                # API client and types
├── assets/             # Static assets
├── components/         # Page-level components (ShoppingList, Hero, etc.)
├── ui/                 # Reusable UI primitives (button, input, card, ...)
├── lib/                # Utils
├── App.tsx
├── main.tsx
```

## 🔧 Tech Stack

- **Framework:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler / Dev server:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI primitives & components:** [Shadcn](https://ui.shadcn.com/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Lint & Format:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Pre-commit hooks:** [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks), [nano-staged](https://github.com/antfu/nano-staged)

---

Built with ❤️ with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [TypeScript](https://www.typescriptlang.org/).
