using Tabloid.Models;
using System.Collections.Generic;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository

    {
        void Add(Category category);
        void Delete(int id);
        List<Category> GetAll();
        void Update(Category category);

        Category GetById(int id);
    }
}
