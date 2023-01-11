using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using shoppingApi.Models;
using shoppingApi.Data;
using System;
using System.Linq;

namespace shoppingApi.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new CategoryDbContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<CategoryDbContext>>()))
        {
            // Look for any movies.
            if (context.Category.Any())
            {
                return;   // DB has been seeded
            }
            context.Category.AddRange(
                new Category
                {
                    Name = "מוצרי ניקיון"
                },
                new Category
                {
                    Name = "גבינות"

                },
                new Category
                {
                    Name = "ירקות ופירות"

                },
                new Category
                {
                    Name = "בשר ודגים"

                },
                new Category
                {
                    Name = "מאפים"
                }
            );
            context.SaveChanges();
        }
    }
}