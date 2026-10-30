# TJ Enterprise

A Dutch-language, multi-page website for TJ Enterprise, an independent offshore platform builder for the oil and gas industry. The site uses a shared industrial design system and contains 18 information pages plus 14 project case pages.

## Build and preview

```sh
npm run build
npm test
python -m http.server 8000
```

Open `http://localhost:8000` after building. The static build writes the homepage, nested route pages, a 404 page, `sitemap.xml`, and `robots.txt` to the repository root for GitHub Pages.

## Content and assets

- `src/site-data.mjs` contains the project and page content.
- `scripts/build-site.mjs` generates all static routes.
- `images/projects/` contains the project images used on the site.
- `npm run fetch:project-images` re-downloads those images from the approved project source.
- The shared offshore hero remains `images/tj-enterprise-offshore.png`; the transparent TJ logo is used in the header and footer.

The contact link opens an email draft to `info@tjenterprise.nl`; the site does not send form submissions.
