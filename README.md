# NanoScripts

NanoScripts is a single-page agency website focused on helping teams set up automated QA infrastructure using Playwright, Docker, and GitHub Actions. The site is designed to communicate value quickly, highlight technical capabilities, and support multilingual visitors.

## Features

- Single-page marketing site for QA automation services
- Responsive layout for desktop and mobile
- Dark mode support that respects system preference by default
- Built with Astro, Tailwind CSS, and TypeScript
- Multi-language support for English, Russian, and Chinese

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- Custom i18n setup

## Development

Run the following commands from the project root:

```sh
npm install
astro dev --background
```

This starts the Astro dev server in the background. You can manage it with:

```sh
astro dev status
astro dev logs
astro dev stop
```

Other useful commands:

```sh
npm run check
npm run build
```

## Customization

Update your own contact details in `src/pages/index.astro`:

- GitHub
- LinkedIn
- Email

Language copy and translations are managed in `src/i18n.ts`.

## Project Structure

```text
src/
  components/
  i18n.ts
  pages/
  styles/
```

## Notes

- Dark mode follows the system preference on first visit.
- The nav allows users to switch themes manually.
- The site supports English, Russian, and Chinese copy out of the box.

## License

This project is intended for personal or client use depending on your setup. Add your preferred license here if you plan to distribute it publicly.
