using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using shoppingApi.Models;

namespace shoppingApi.Data;
    public class CategoryDbContext : DbContext
    {
        public CategoryDbContext (DbContextOptions<CategoryDbContext> options)
            : base(options)
        {
        }

        public DbSet<shoppingApi.Models.Category> Category { get; set; } = default!;
    }
