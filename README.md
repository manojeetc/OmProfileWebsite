# Om Student Resume & Portfolio

This is a static HTML5 student résumé/portfolio site.

## Structure

- `index.html`
  - About
  - Academics
  - Science & Engineering Projects
  - Awards & Honors
  - Chess
  - Leadership / Service / Activities
  - Skills

- `pages/`
  - one detail page per individual item
  - `_item-template.html` is a reusable blank detail page

## How it works

Every card or row on the homepage links to its own HTML file in `pages/`.

Example:

```html
<a href="pages/project-allergy.html">...</a>
```

To add a new award, project, tournament, or activity:

1. Copy `pages/_item-template.html`
2. Rename it, for example `pages/chess-indianapolis-open.html`
3. Edit the content
4. Add a card or row on `index.html` linking to that file

## Images

Create an `images/` folder in the main directory, then replace placeholders with images:

```html
<img src="../images/project-photo.jpg" alt="Project prototype">
```

For an image on `index.html`:

```html
<img src="images/profile.jpg" alt="Om">
```

## Hosting

This site can be hosted directly on:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

No server, database, React, or build process is required.
