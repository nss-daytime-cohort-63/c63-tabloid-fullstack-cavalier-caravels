using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;
using Tabloid.Models;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;

        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAll());
        }

        [HttpPost]
        public IActionResult Add(Tag tag)
        {
            _tagRepository.AddTag(tag);
            return CreatedAtAction("Get", new { id = tag.Id }, tag);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Tag tag) 
        {
            if (id != tag.Id)
            {
                return BadRequest();
            }

            _tagRepository.UpdateTag(tag);
            return NoContent();
        }
    }
}
