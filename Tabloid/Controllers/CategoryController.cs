using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryrepository;
        public CategoryController(ICategoryRepository categoryrepository)
        {
            _categoryrepository = categoryrepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryrepository.GetAll());
        }
    }
}
