
using Microsoft.EntityFrameworkCore;

namespace Shopping_cart_api.models
{
    public class CategoryContext : DbContext
    {
        public CategoryContext(DbContextOptions<CategoryContext> options) : base(options)
        {

        }
        public DbSet<CategoryItem> CategoryItems { get; set; } = null!;
    }
}
