using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
	public class CommentRepository : BaseRepository, ICommentRepository
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
										from Comment
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
							Content = DbUtils.GetString(reader, "Content"),
							CreatedDateTime = DbUtils.GetDateTime(reader,"CreateDatetime")
						};
						comments.Add(mycomment);
					
					}
				return comments;
				}
			}
			
		}


		public void addComment(Comment comment) 
		{
		using (var conn = Connection) 
			{
				conn.Open();
				using (var cmd =conn.CreateCommand())
				{
					cmd.CommandText = @"insert into comments
										(PostId
										,UserProfileId
										,Subject
										,Content
										,CreateDateTime)
									output Inserted.Id
									values (@PostId
										,@userProfileId
										,@subject
										,@content
										,@createDateTime)";
					cmd.Parameters.AddWithValue("@postId", comment.PostId);
					cmd.Parameters.AddWithValue("@userProfileId", comment.UserProfileId);
					cmd.Parameters.AddWithValue("@subject", comment.Subject);
					cmd.Parameters.AddWithValue("@content", comment.Content);
					cmd.Parameters.AddWithValue("@createDateTime", comment.CreatedDateTime);

					comment.Id = (int)cmd.ExecuteScalar();
				}
			
			}
		
		}

	}
}
