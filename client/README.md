new iteration of the shopping cart

clone to a local repo
create a appsettings.json file, next to appsettingsdevelopment.json
be sure it includes
```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "CategoryDbContext": {YOUR_CONNECTION_STRING}
  }
}
```
