# avolkov-II.github.io

Personal portfolio website for **Alexei Volkov** — Staff Software Engineer specialising in low-latency trading systems (C++, Rust, DPDK, eBPF).

Built with vanilla HTML, CSS, and JavaScript. Hosted via [GitHub Pages](https://avolkov-II.github.io).

## Features

- **Dark/Light theme** — persistent toggle with system preference detection
- **Fully responsive** — mobile-first layout with hamburger navigation
- **Smooth scroll** — native CSS `scroll-behavior` with JS fallback
- **Scroll reveal** — subtle fade-in animations as sections enter the viewport
- **Keyboard shortcut** — press `t` to toggle theme
- **No frameworks** — 100% custom CSS (custom properties, flexbox, grid)

## Sections

1. **Hero** — name, title, tagline, call-to-action buttons
2. **About** — background and engineering philosophy
3. **Skills** — categorised tech stack badges (Languages, Low-Latency, Frameworks, Infrastructure)
4. **Experience** — career timeline from 2018 to present
5. **Projects** — 4 open-source project cards with GitHub links
6. **Education** — MEng Computer Science, Imperial College London
7. **Contact** — email, GitHub, LinkedIn

## Local Development

```bash
# Serve locally (any static server will do)
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deployment

Push to the `main` branch of `avolkov-II/avolkov-II.github.io`. GitHub Pages will automatically build and deploy the site.

## License

MIT
