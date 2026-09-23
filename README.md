# Common Ground Advisory: website and brand

```
*.html, assets/   the website, ready for Vercel (plain HTML and CSS, no build step)
brand/            logo files (SVG and PNG), app icon and a one-page brand sheet
```

The site lives at the repository root so Vercel serves it without any extra configuration.

## 1. Replace the placeholders

Use "Replace in files" in VS Code (or any editor) across the repository.

| Find | Replace with | Where it appears |
|---|---|---|
| `hello@commongroundadvisory.co.uk` | Your real email address | Every page |
| `https://www.commongroundadvisory.co.uk` | Your real domain | Every page, `sitemap.xml`, `robots.txt` |
| `https://formspree.io/f/YOUR_FORM_ID` | Your Formspree form URL (see step 2) | `contact.html` |
| `XXXXXXXX` | Your Companies House number | Every page's footer, `privacy.html` |
| `[registered office address]` | Your registered office address | Every page's footer, `privacy.html` |

Your company name, number and registered office have to be on the site by law once you're trading, so don't skip the last two.

## 2. Connect the contact form

The form uses Formspree, which emails each enquiry to you. Nothing needs to run on your side.

1. Sign up at formspree.io. The free plan covers 50 enquiries a month.
2. Create a new form and copy its URL. It looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it in place of `https://formspree.io/f/YOUR_FORM_ID` in `contact.html`.

Until you do this, the form tells visitors to email you instead, so nothing breaks.

## 3. Add your photo

The About page and the homepage show a placeholder where your photo goes.

1. Save a portrait photo as `assets/img/nathan.jpg`. Upright, about 800 × 1000px, works best.
2. In `index.html` and `about.html`, find the comment that starts `Replace this placeholder with your photo`.
3. Uncomment the `<img>` line inside it, then delete the `<svg>...</svg>` block underneath.

## 4. Deploy on Vercel

**Option A, from GitHub (easiest to update later)**
1. In Vercel, choose Add New → Project and import this repo.
2. Set Framework Preset to **Other**. Leave the build command empty and the Root Directory as the repository root.
3. Deploy, then add your domain under Settings → Domains.

**Option B, from your computer**
```
npm i -g vercel
vercel --prod
```

`vercel.json` already handles clean links (`/pricing` rather than `/pricing.html`), caching and basic security headers.

## 5. Check the copy before launch

The copy is written to your brief, but a few things are my suggestions rather than things you told me:

- **Prices.** £750 position review; negotiation £1,500 / £2,500 / £3,500 by number of creditors; £150 a month for monitoring; negotiation fee spread over three months. Change these in `index.html` and `pricing.html`.
- **Commission promise.** The site says any refinancing commission is declared and deducted from your fee. Keep it only if you're happy to commit to it.
- **Response times.** "Usually the same day", "within one working day" and "usually within a week" for the review.
- **Your story.** The About page says you're 22, opened your first business at 18, run a multi-site leisure group with around 40 staff, won an industry award, and turned it around. Make sure you're comfortable with every line.
- **Legal wording.** The footer disclaimer and privacy notice are sensible starting points, not legal advice. Have someone check them, especially where the site talks about what you don't do.

## Also worth doing before launch

- Register with the ICO (the data protection fee) once you're collecting enquiries.
- Get professional indemnity insurance before advising anyone.
- Draft a simple engagement letter and letter of authority to match the process on the site.
- Point a real mailbox at the email address and set up Google Business Profile if you want to show up in local searches.

## Brand

- **Font:** Archivo, free under the SIL Open Font License (`assets/fonts/OFL.txt`). It's hosted with the site, so there are no Google requests and no cookie banner needed.
- **Colours:** Forest `#1D4A38`, Ink `#15261F`, Marigold `#F1B43C`, Moss `#6E9A83`, Sage `#E6EEE9`, Paper `#FBFCFA`.
- **Logo files:** `brand/logo.svg` (full), `logo-reverse.svg` (for dark backgrounds), `logo-inline.svg` (one line), `logo-mono.svg` (one colour), `mark.svg` (symbol only), `icon-512.png` (social avatar). PNG versions are included for email signatures and documents.
