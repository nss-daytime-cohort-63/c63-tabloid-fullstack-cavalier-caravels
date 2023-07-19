using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;
using Tabloid.Models;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("MyPosts/{userId}")]
        public IActionResult GetUserPosts(int userId)
        {
            return Ok(_postRepository.GetByUserId(userId));
        }

        [HttpPost("add")]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);

            return CreatedAtAction("Get", new {id = post.Id }, post);
        }
    }
}
