# TWHPC Website

Official website for the Taiwan High Performance Computing Education Association (TWHPC).

## Features

- Bilingual support (Traditional Chinese and English)
- Responsive design
- Dynamic content loading using Markdown files
- Modern and clean UI

## Development

### Prerequisites

- A modern web browser
- Basic HTTP server (e.g., Python's `http.server` for local development)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/twhpc-website.git
   cd twhpc-website
   ```

2. Start a local server:
   ```bash
   python -m http.server 8000
   ```

3. Open http://localhost:8000 in your browser

### Project Structure

```
.
├── content/           # Markdown content files
│   ├── en/           # English content
│   └── zh/           # Chinese content
├── css/              # Stylesheets
├── js/               # JavaScript files
├── index.html        # Main HTML file
└── 404.html          # 404 error page
```

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## URL Structure and Routing

The website uses a combination of path-based language selection and hash-based routing:

```
/{language}#{page}
```

Examples:
- `/zh#home` - Chinese home page
- `/en#about` - English about page

### Language Handling

- Valid language codes: `zh` (Chinese) and `en` (English)
- Invalid language paths are automatically redirected to the default language
- Language preference is stored in localStorage
- Example: `/jp#home` redirects to `/zh#home` (or `/en#home` if English was previously selected)

### Resource Loading

All static resources (CSS, JS) use absolute paths from the root to ensure proper loading regardless of the current URL:

```html
<link rel="stylesheet" href="/css/style.css">
<script src="/js/i18n.js"></script>
<script src="/js/main.js"></script>
```

This prevents resource loading issues when accessing the site through non-root paths.

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

Copyright 2024 Taiwan High Performance Computing Education Association. All rights reserved.
