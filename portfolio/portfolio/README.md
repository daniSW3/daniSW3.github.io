# Daniel Temesgen — portfolio

Personal portfolio site, built with [Astro](https://astro.build) and deployed free on GitHub Pages.

**Live:** https://danisw3.github.io

---

## Deploy it (first time, about 10 minutes)

1. **Create the repository.** On GitHub, click **New repository**. Name it exactly
   `daniSW3.github.io` (this name is what gives you the clean root URL). Make it **Public**.
   Don't add a README or .gitignore; this project already has them.

2. **Push this folder.** Install [Git](https://git-scm.com/downloads) if you don't have it, unzip
   the project, open a terminal in the unzipped folder, and run:

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/daniSW3/daniSW3.github.io.git
   git push -u origin main
   ```

3. **Turn on Pages.** In the repo, open **Settings → Pages**. Under **Build and deployment → Source**,
   choose **GitHub Actions**.

4. **Wait for the build.** Open the **Actions** tab. The *Deploy to GitHub Pages* run takes 1–2
   minutes. When it shows a green tick, the site is live at **https://danisw3.github.io**.

   If the first run started before you changed the Pages source, open it and click **Re-run all jobs**.

## Update it

All content lives in one file: **`src/data/profile.ts`**. Experience, projects, skills, articles,
certifications and contact details are all there.

**Easiest way, in the browser:** open the file on github.com, click the pencil icon, edit, then
**Commit changes**. The site redeploys automatically within about two minutes.

**On your computer, with a live preview** (needs [Node.js](https://nodejs.org) 20 or later):

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:4321, reloads as you edit
npm run build      # optional: check the production build
git add . && git commit -m "Update projects" && git push
```

### Common edits

| To… | Do this |
|---|---|
| Add a project | Copy one `{ ... }` block in `projects`, change the text. Set `featured: true` to list it first. Add `demo: 'https://...'` for a live-demo button. |
| Replace the CV | Overwrite `public/Daniel_Temesgen_CV.pdf`, keeping the same file name. |
| Add a job | Add a block at the **top** of `experience` (newest first). |
| Add an article | Add a block at the top of `articles` with its Medium URL and date. |
| Change colours | Edit the variables at the top of `src/styles/global.css`. |
| Update the share preview | Replace `public/og.png` (1200×630 px). |

## Add a custom domain later (optional)

1. Buy a domain (e.g. from Namecheap, Cloudflare or Porkbun).
2. In the repo: **Settings → Pages → Custom domain**, enter it and save.
3. At your domain registrar, add the DNS records GitHub shows you (a `CNAME` record pointing `www`
   to `danisw3.github.io`, plus GitHub's four `A` records for the bare domain).
4. Once the DNS check passes, tick **Enforce HTTPS**.
5. In `astro.config.mjs` change `site` to your new domain, and update the same URL in
   `src/data/profile.ts` (`site.url`) and `public/robots.txt`. Commit and push.

## Project structure

```
src/
  data/profile.ts        ← all content (edit this)
  components/            Header, Hero, Lineage diagram, About/Experience, Projects, Skills/Writing/Contact
  layouts/Base.astro     SEO meta, Open Graph, structured data
  styles/global.css      design tokens, light/dark themes
  pages/                 index.astro, 404.astro
public/                  CV, favicon, share image, robots.txt
.github/workflows/       automatic deploy to GitHub Pages
```

## Help Google find the site

After it's live, add it at [Google Search Console](https://search.google.com/search-console)
(**URL prefix** → `https://danisw3.github.io/`). Verify with the HTML-tag method by pasting
the meta tag into `src/layouts/Base.astro`, then submit `sitemap-index.xml`. Put the URL in your
LinkedIn **Contact info → Website** and in your GitHub profile's website field too.
