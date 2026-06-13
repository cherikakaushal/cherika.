# cherika kaushal — personal website

> trying to make sense of systems (they disagree)

## tech stack

- **Next.js 14** — framework
- **React Three Fiber** — 3D particle background
- **W3.CSS** — utility layer
- **Framer Motion** — scroll animations
- **Playfair Display + DM Mono + Cormorant Garamond** — type system

## getting started

```bash
# install dependencies
npm install

# run dev server
npm run dev

# build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## structure

```
cherika-site/
├── pages/
│   ├── _app.js          # global styles + providers
│   ├── _document.js     # HTML shell, fonts, W3.CSS
│   └── index.js         # main page (composes all sections)
├── components/
│   ├── ThreeBackground.js  # React Three Fiber 3D particles
│   ├── Nav.js              # sticky nav + dark/light toggle
│   ├── Hero.js             # hero section
│   ├── Intro.js            # intro paragraph
│   ├── Work.js             # projects grid
│   ├── Writing.js          # blog posts + quotes
│   ├── Ideas.js            # ideas/marketing + interests
│   └── AboutFooter.js      # about section + footer
├── styles/
│   └── globals.css         # CSS variables, typography, base
└── next.config.js
```

## theme

Toggle between dark (#0b0b0f) and light (#f8f5f2) via the pill in the nav.
Preference saved to localStorage.

## customization

- **Projects**: edit the `projects` array in `components/Work.js`
- **Writing**: edit the `posts` array in `components/Writing.js`
- **Colors**: change CSS variables in `styles/globals.css`
- **3D**: adjust particle count/size in `components/ThreeBackground.js`
