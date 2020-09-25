using Microsoft.EntityFrameworkCore;
using Ezzibook.API.Models;
namespace Ezzibook.API.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options): base(options){}
        
       
         public DbSet<user> Users{get; set;}
    }
}   