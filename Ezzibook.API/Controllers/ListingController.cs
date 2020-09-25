using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ezzibook.API.Data;
using Microsoft.EntityFrameworkCore;
using Ezzibook.API.Models;


namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListingController : ControllerBase
    {
        
        private readonly ListingContext _context;
        public ListingController(ListingContext context)
        {
            _context = context;
        }

        // GET api/values

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var values = await _context.Listings.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
          var value = await _context.Listings.FirstOrDefaultAsync(x => x.Id == id);   
      
          return Ok(value);
        }   

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(Lisitng value )
        {
              await _context.Listings.AddAsync(value);  
             await _context.SaveChangesAsync();

              return Ok(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
          public async Task<IActionResult> Delete(int id)
        {
          var value = await _context.Listings.FirstOrDefaultAsync(x => x.Id == id);   
            _context.Listings.Remove(value);
            await _context.SaveChangesAsync();
          return Ok(value);
        }   
    }
}
