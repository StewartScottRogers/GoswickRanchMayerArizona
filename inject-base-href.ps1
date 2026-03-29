#!/usr/bin/env pwsh
# Script to inject base href tag into HTML files for GitHub Pages deployment
# This allows the site to work correctly when deployed to a subdirectory

$wwwroot = Join-Path $PSScriptRoot "WebSite" "wwwroot"
$baseHref = "/GoswickRanchMayerArizona"

# Find all HTML files
$htmlFiles = Get-ChildItem -Path $wwwroot -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw

    # Check if base tag already exists
    if ($content -match '<base\s+href') {
        Write-Host "Skipping $($file.FullName) - base tag already present"
        continue
    }

    # Inject base href tag after opening head tag
    $newContent = $content -replace '(<head[^>]*>)', "`$1`n  <base href=`"$baseHref`">"

    Set-Content -Path $file.FullName -Value $newContent
    Write-Host "Updated $($file.FullName)"
}

Write-Host "Base href injection complete!"
