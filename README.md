# Amal Bakhouya — Portfolio

Personal portfolio built with Next.js (App Router), Tailwind CSS v4 and Framer Motion. It is exported as a static site (`output: "export"`) and is ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run lint
npm run build
```

The static site is written to `out/`.

## Edit the content

All content lives in `src/data/`. Empty optional fields are hidden on the site. To find what is still missing, search the folder for `À COMPLÉTER`.

| Content | File |
| --- | --- |
| Name, about, email, LinkedIn, CV | `src/data/profile.ts` |
| Projects (each one gets a page at `/projects/<slug>`) | `src/data/projects.ts` |
| Experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Certifications | `src/data/certifications.ts` |
| Education | `src/data/education.ts` |
| Leadership and activities | `src/data/activities.ts` |

To offer the CV for download, add the PDF as `public/cv/Amal_Bakhouya_CV.pdf`, then set `cvPath` to `/cv/Amal_Bakhouya_CV.pdf` in `src/data/profile.ts`.

## Environment variables

Copy `.env.example` to `.env.local`. On Vercel, set the same variables in the project settings.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORM_ACCESS_KEY` | [Web3Forms](https://web3forms.com/) key for the contact form |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for metadata, the sitemap and `robots.txt` |

Without a form key, the contact form opens the visitor's email client. If `email` is also empty, the form is hidden.
