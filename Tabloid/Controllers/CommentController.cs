using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase

    {
        private readonly ICommentRepository _commentRepository;
        
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet]
        public IActionResult Hello()
        {
            return Content("hello");
        }

        [Authorize]
        [HttpGet("auth")]
        public IActionResult HelloAuth()
        {
            return Content("hello from an endpoint that requires auth");
        }

        [HttpGet("{PostId}")]
        public IActionResult CommentByPostId(int PostId) 
        {
            return Ok(_commentRepository.getbyPostId(PostId));
        }
    }
}
