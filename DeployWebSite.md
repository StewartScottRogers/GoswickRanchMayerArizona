# Deploy

## One-time setup (do this once in GitHub repo settings)

GitHub → repo **Settings → Pages → Source → GitHub Actions**

This enables the workflow at `.github/workflows/deploy.yml`, which deploys
`WebSite/wwwroot/` to GitHub Pages on every push to `master`.

## Deploy (one command)

```
git add . && git commit -m "Regenerate site" && git push
```

The GitHub Actions workflow runs automatically after the push.
Live site: https://stewartscottrogers.github.io/GoswickRanchMayerArizona/