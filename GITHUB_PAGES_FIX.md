# GitHub Pages Path Fix

## The Problem

The site is hosted at a subdirectory URL:
`https://stewartscottrogers.github.io/GoswickRanchMayerArizona/`

If HTML files use root-relative paths like `/css/style.css` or `/about/`, the browser resolves them against the origin root (`stewartscottrogers.github.io`), not the subdirectory. This causes all CSS, JS, and navigation links to return 404.

## The Fix (applied 2026-03-29)

Every internal `href` and `src` in every HTML file is prefixed with `/GoswickRanchMayerArizona/`:

```html
<!-- Correct -->
<link rel="stylesheet" href="/GoswickRanchMayerArizona/css/style.css">
<script src="/GoswickRanchMayerArizona/js/main.js"></script>
<a href="/GoswickRanchMayerArizona/">Home</a>
<a href="/GoswickRanchMayerArizona/about/">About</a>
<a href="/GoswickRanchMayerArizona/hoa/documents.html">Documents</a>

<!-- Wrong — breaks on GitHub Pages -->
<link rel="stylesheet" href="/css/style.css">
<a href="/about/">About</a>
```

## Why `<base href>` Does Not Work

The `<base href="/GoswickRanchMayerArizona">` tag only affects *relative* paths (those without a leading `/`). It has no effect on root-relative paths (those starting with `/`). Since all internal paths use root-relative format, the `<base>` tag does nothing useful. **Do not add `<base>` tags.**

## Local Development

When running locally (`dotnet run`, port 5000), the site serves from the root (`http://localhost:5000/`), so `/GoswickRanchMayerArizona/css/style.css` will 404 locally. To test the full site locally, either:
- Use the live GitHub Pages URL, or
- Run a local proxy that maps `/GoswickRanchMayerArizona/` to `wwwroot/`

## When Regenerating the Site

See the path prefix requirement documented in BUILD.md and PAGES.md. The rule applies to every HTML file written to `wwwroot/`.
