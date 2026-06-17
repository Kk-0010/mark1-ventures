# MARK 1 Ventures — Website

Marketing website for **MARK 1**: “Capital . Cloud . Confidence” — investors, mentors, and builders of AI/SaaS/data ecosystems.

Built with **Vite + React**, **React Router**, **Tailwind CSS**, and a **Formspree** contact form.

## Tech stack

- **Vite** (dev server, build)
- **React 19**
- **React Router** (nested routes)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui + Radix UI** components (see `components.json`)
- **ESLint** (flat config)

## Routes

The router is defined in `src/main.jsx`.

- `/` — Home
- `/about`
- `/investment-and-mentorship`
- `/data-services`
- `/cloud-and-hosting`
- `/outsourcing`
- `/technology-services`
- `/office-and-workspace`
- `/why-mark-one`
- `/contact`

## Getting started

### Prerequisites

- Node.js (recommended: latest LTS)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local URL in the terminal.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Configuration

### Formspree (Contact form)

The contact form uses Formspree via `@formspree/react`.

Update the placeholder Formspree ID in `src/components/Contact/ContactForm.jsx`:

```js
const [state, handleSubmit] = useForm("your-form-id-here");
```

Replace `"your-form-id-here"` with your real Formspree form ID.

## Project structure

```text
src/
  components/         Shared components (Header, Footer, ContactForm, UI)
  pages/              Route pages (Home, About, Contact, etc.)
  assets/             Images/icons
  lib/                Shared utilities (see alias below)
  constants.js        Site copy/content and nav definitions
```

## Path aliases

The project defines `@` as an alias to `src/` in `vite.config.js`, so imports like `@/components/...` work out of the box.
