using Microsoft.EntityFrameworkCore;
using Ezzibook.API.Models;
namespace Ezzibook.API.Data
{
    public class ListingContext : DbContext
    {
        public ListingContext(DbContextOptions<ListingContext> options): base(options){}
        
        public DbSet<Lisitng> Listings{get; set;}
         public DbSet<user> Users{get; set;}
    }
}   