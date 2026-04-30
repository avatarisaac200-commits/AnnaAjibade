# Amara Osei — Landing Page

A bold, expressive personal landing page for a Social Impact Project Manager. Built with Next.js 14, Tailwind CSS, and Framer Motion. Deploy-ready on Vercel.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + CSS
- **Fonts**: Playfair Display (display) + DM Sans (body) + DM Mono (labels)
- **Icons**: React Icons
- **Counters**: React CountUp

## Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Page assembly
│   └── globals.css       # Global styles, custom utilities
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Full-screen hero with stats
│   ├── Marquee.tsx       # Skills ticker strip
│   ├── About.tsx         # About + skill grid
│   ├── Services.tsx      # Services list with hover effects
│   ├── Impact.tsx        # Animated counters + partner logos
│   ├── Testimonials.tsx  # Carousel testimonials
│   ├── Contact.tsx       # Contact form + info
│   └── Footer.tsx        # Footer
├── public/               # Static assets (add photo here)
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customise

### Replace placeholder content
Search for these and update across components:
- `Amara Osei` → Client's real name
- `amara@amaraosei.com` → Real email
- `+44 7700 000000` → Real phone
- Photo placeholder in `Hero.tsx` → Replace the `<div>` block with `<Image>` from `next/image`

### Add a real photo
In `Hero.tsx`, replace the avatar placeholder div with:
```tsx
import Image from "next/image";
// ...
<Image
  src="/photo.jpg"
  alt="Amara Osei"
  fill
  className="object-cover object-top"
  priority
/>
```
Then drop `photo.jpg` into `/public/`.

### Contact form
The form is currently frontend-only. To wire it up:
- **Easiest**: Use [Formspree](https://formspree.io) — replace `onSubmit` with a fetch to your Formspree endpoint
- **Full stack**: Add a Next.js API route at `app/api/contact/route.ts` with Nodemailer or Resend

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables needed unless you add a backend contact form.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#0A0A0F` | Background |
| `--cream` | `#F5F0E8` | Text |
| `--gold` | `#C9A84C` | Primary accent |
| `--gold-light` | `#E8C97A` | Hover states |
| `--ember` | `#D4522A` | Decorative accent |
| `--sage` | `#4A6741` | Available / positive |

Fonts via Google Fonts: Playfair Display · DM Sans · DM Mono
