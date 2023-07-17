using Tabloid.Models;
using System.Collections.Generic;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository

    {
    void Add(Category category);
    void Delete(int id);
    List<Category> GetAll();
    Post GetById(int id);
    void Update(Category category);
    }
}
