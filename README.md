# Therapy Site Template

A React + Vite template for a therapist profile website (Greek content by default) with a contact form backed by Supabase Edge Functions and Resend.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui components
- Supabase (client + Edge Function)
- Resend (email delivery)

## Prerequisites

- Node.js 20+ (Vite 5 does not support Node 16)
- npm
- A Supabase project
- A Resend API key (if you want the contact form email flow)

## Create a New Site Instance

1. Clone and install:

```sh
git clone <your-repo-url>
cd therapy-site
npm install
```

2. Create your local frontend env file:

```sh
cp .env.example .env.local
```

3. Create your private site content file (gitignored):

```sh
cp src/content/site.config.example.ts src/content/site.config.ts
```

Then edit `src/content/site.config.ts` with your own:

- Name and tagline
- Navigation labels
- Hero/about/approach text
- Services titles and descriptions
- Contact details

4. Run the app locally:

```sh
npm run dev
```

Default local URL: `http://localhost:8080`

## Contact Form Setup (Supabase + Resend)

The contact form calls the Supabase Edge Function at:

- `supabase/functions/send-contact-email/index.ts`

Set function secrets in Supabase:

```sh
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set CONTACT_EMAIL=your_inbox_email
```

Deploy the function:

```sh
supabase functions deploy send-contact-email
```

Notes:

- `CONTACT_EMAIL` is the destination inbox for form submissions.
- The current function uses `onboarding@resend.dev` as sender; replace it with a verified sender/domain for production.

## Useful Scripts

```sh
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
```

## Content and Privacy Model

- `src/content/site.config.example.ts` is the committed template.
- `src/content/site.config.ts` contains real private content and is ignored via `.gitignore`.

This allows each developer/deployment to keep its own content without leaking personal details into git history.
