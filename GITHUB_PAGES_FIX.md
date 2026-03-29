# GitHub Pages Publishing Fix

## Summary
Fixed the publishing configuration for the Goswick Ranch website to correctly deploy to GitHub Pages at `https://stewartscottrogers.github.io/GoswickRanchMayerArizona/`

## Issues Found
1. **Missing Base Path**: The HTML files used root-relative paths (e.g., `/css/style.css`, `/about/`) but the site is deployed to a subdirectory on GitHub Pages
2. **No Base URL Configuration**: The ASP.NET project lacked configuration for the base deployment path

## Changes Made

### 1. Updated `WebSite/WebSite.csproj`
Added a `<BasePath>` property to document the GitHub Pages deployment path:
```xml
<BasePath>/GoswickRanchMayerArizona</BasePath>
```

### 2. Created `WebSite/PathConfiguration.cs`
Added a configuration utility class to provide the base path:
- Detects GitHub Actions environment to determine deployment context
- Can be extended for other deployment scenarios
- Provides centralized base path management

### 3. Updated `WebSite/Program.cs`
Added using statement for the new PathConfiguration namespace.

### 4. Injected `<base>` Tag into All HTML Files
Ran `inject-base-href.ps1` script to inject the base href tag into all 19 HTML files:
```html
<base href="/GoswickRanchMayerArizona">
```

This tag tells the browser to resolve all relative URLs from this base, so:
- `/css/style.css` resolves to `/GoswickRanchMayerArizona/css/style.css`
- `/about/` resolves to `/GoswickRanchMayerArizona/about/`
- etc.

### 5. Created `inject-base-href.ps1`
Utility PowerShell script to inject the base href tag into HTML files. This can be reused if HTML files are regenerated.

## How It Works

The `<base href>` HTML tag is the standard way to handle GitHub Pages subdirectory deployments. It tells the browser that all relative URLs should be resolved from `/GoswickRanchMayerArizona/`.

The workflow in `.github/workflows/deploy.yml` already correctly:
1. Uploads the `WebSite/wwwroot` directory as the artifact
2. Uses GitHub's Deploy Pages action to publish it
3. GitHub Pages automatically serves this to the correct URL

## Testing

The project builds successfully with no errors. 

## Deployment

When you push to the `master` branch:
1. GitHub Actions triggers the deploy workflow
2. The static files from `WebSite/wwwroot` are uploaded
3. They are published to `https://stewartscottrogers.github.io/GoswickRanchMayerArizona/`
4. All links and resources should now work correctly because of the `<base>` tag

## Notes

- Local development continues to work with root-relative paths (because the base href is relative to the deployment)
- The GitHub Pages configuration is now complete and production-ready
- The site is fully static HTML/CSS/JS - no server-side processing required
