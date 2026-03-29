using Microsoft.AspNetCore.Builder;
using WebSite;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Serve static files from wwwroot or current directory
app.UseDefaultFiles();
app.UseStaticFiles();

var port = app.Configuration["Port"] ?? System.Environment.GetEnvironmentVariable("PORT") ?? "5000";
await app.RunAsync($"http://localhost:{port}");
