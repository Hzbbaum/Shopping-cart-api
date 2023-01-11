using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using shoppingApi.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<shoppingApi.Data.CategoryDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CategoryDbContext") ?? throw new InvalidOperationException("Connection string 'CategoryDbContext' not found.")));

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<shoppingApi.Data.CategoryDbContext>(options =>
{
    options.UseSqlServer("SqlServer");
});
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<shoppingApi.Data.CategoryDbContext>();
    db.Database.Migrate();
    var services = scope.ServiceProvider;
    SeedData.Initialize(services);
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
