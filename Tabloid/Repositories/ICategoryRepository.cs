using Tabloid.Models;
using System.Collections.Generic;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository

    {
    void Add(Post post);
    void Delete(int id);
    List<Category> GetAll();
    Post GetById(int id);
    void Update(Post post);
    }
}
