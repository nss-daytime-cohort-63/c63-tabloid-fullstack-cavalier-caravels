using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
	public class CommentRepository : BaseRepository
	{
		public CommentRepository(IConfiguration configuration) : base(configuration)
		{
		}

		public List<Comment> getbyPostId(int postId)
		{
			using (var conn = Connection)
			{
				conn.Open();
				using (var cmd = conn.CreateCommand()) 
				{
					cmd.CommandText = @" select Comment.Id as CommentId,
										 Comment.PostId,
										Comment.UserProfileId, 
										Comment.Subject,
										Comment.Content, 
										Comment.CreateDateTime 
										where PostId = @id";
					cmd.Parameters.AddWithValue("@id", postId);
					var reader = cmd.ExecuteReader();
					List<Comment> comments = new List<Comment>();
					while(reader.Read()) 
					
					{
						var mycomment = new Comment()
						{
							Id = DbUtils.GetInt(reader, "CommentId"),
							PostId = DbUtils.GetInt(reader, "PostId"),
							UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
							Subject = DbUtils.GetString(reader, "Subject"),
							Content = DbUtils.GetString(reader, "Context"),
							CreatedDateTime = DbUtils.GetDateTime(reader,"CreateDatetime")
						};
						comments.Add(mycomment);
					
					}
				return comments;
				}
			}
			
		}

	}
}
