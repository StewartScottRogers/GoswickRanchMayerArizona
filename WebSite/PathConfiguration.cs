using System;

namespace WebSite;

/// <summary>
/// Provides base path configuration for the application.
/// Used to support GitHub Pages deployment to a subdirectory.
/// </summary>
public static class PathConfiguration
{
    /// <summary>
    /// Gets the base path for the application.
    /// Returns /GoswickRanchMayerArizona for GitHub Pages production,
    /// or empty string for local development.
    /// </summary>
    public static string GetBasePath()
    {
        // Check if running on GitHub Pages (by environment variables set by GitHub Actions)
        var isGitHubPages = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("GITHUB_ACTIONS"));

        return isGitHubPages ? "/GoswickRanchMayerArizona" : "";
    }
}
