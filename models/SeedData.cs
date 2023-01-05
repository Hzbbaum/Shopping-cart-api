using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shopping_cart_api.models;
using System;
using System.Linq;

namespace Shopping_cart_api.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new CategoryContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<CategoryContext>>()))
        {
            // Look for any movies.
            if (context.CategoryItems.Any())
            {
                return;   // DB has been seeded
            }
            context.CategoryItems.AddRange(
                new CategoryItem
                {
                    Name = "מוצרי ניקיון"
                },
                new CategoryItem
                {
                    Name = "גבינות"

                },
                new CategoryItem
                {
                    Name = "ירקות ופירות"

                },
                new CategoryItem
                {
                    Name = "בשר ודגים"

                },
                new CategoryItem
                {
                    Name = "מאפים"
                }
            );
            context.SaveChanges();
        }
    }
}