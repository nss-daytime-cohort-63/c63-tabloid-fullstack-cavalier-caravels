using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
	public interface ICommentRepository
	{
		List<Comment> getbyPostId(int postId);
	}
}
