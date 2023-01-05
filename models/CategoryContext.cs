using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Configuration;

namespace Shopping_cart_api.models
{
    public class CategoryContext : DbContext
    {

        public CategoryContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<CategoryItem> CategoryItems { get; set; } = null!;
    }
}
