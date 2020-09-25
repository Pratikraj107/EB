using Microsoft.EntityFrameworkCore;
using Ezzibook.API.Models;
namespace Ezzibook.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}
        
        public DbSet<Values> Values{get; set;}
    }
}