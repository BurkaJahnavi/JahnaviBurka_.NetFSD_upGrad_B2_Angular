using ContactService.Data;
using ContactService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContactService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ContactController : ControllerBase
    {
        private readonly ContactDbContext _context;

        public ContactController(ContactDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _context.Contacts.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var data = await _context.Contacts.FindAsync(id);
            if (data == null) return NotFound();
            return Ok(data);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Add(Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
            return Ok(contact);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(int id, Contact contact)
        {
            var data = await _context.Contacts.FindAsync(id);
            if (data == null) return NotFound();

            data.Name = contact.Name;
            data.Email = contact.Email;
            data.Phone = contact.Phone;
            data.CategoryId = contact.CategoryId;

            await _context.SaveChangesAsync();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await _context.Contacts.FindAsync(id);
            if (data == null) return NotFound();

            _context.Contacts.Remove(data);
            await _context.SaveChangesAsync();
            return Ok("Deleted");
        }
    }
}