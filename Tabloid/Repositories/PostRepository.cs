using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT p.Id, p.Title, p.Content, p.ImageLocation, p.CreateDateTime, p.PublishDateTime, p.IsApproved, p.CategoryId AS PostCategoryId, p.UserProfileId,
                                        c.Id as CategoryId, c.[Name] AS CategoryName, u.Id AS UserId, u.DisplayName, u.FirstName, u.LastName, u.Email, u.CreateDateTime AS UserCreateDateTime, 
                                        u.ImageLocation AS UserImageLocation
                                       FROM Post p
                                       LEFT JOIN Category c ON p.CategoryId = c.id
                                       LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                                       WHERE IsApproved = 1 AND PublishDateTime < SYSDATETIME()
                                       ORDER BY PublishDateTime DESC";
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();
                        while (reader.Read())
                        {
                            posts.Add(new Post
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Content = DbUtils.GetString(reader, "Content"),
                                ImageLocation = DbUtils.GetString(reader,"ImageLocation"),
                                CreateDateTime = DbUtils.GetDateTime(reader,"CreateDateTime"),
                                PublishDateTime = DbUtils.GetDateTime(reader,"PublishDateTime"),
                                IsApproved = DbUtils.ReferenceEquals(reader, "IsApproved"),
                                CategoryId = DbUtils.GetInt(reader,"PostCategoryId"),
                                UserProfileId = DbUtils.GetInt(reader,"UserProfileId"),
                                UserProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                    FirstName = DbUtils.GetString(reader,"FirstName"),
                                    LastName = DbUtils.GetString(reader,"LastName"),
                                    Email = DbUtils.GetString(reader,"Email"),
                                    CreateDateTime = DbUtils.GetDateTime(reader,"UserCreateDateTime"),
                                    ImageLocation = DbUtils.GetString(reader,"UserImageLocation")
                                },
                                Category = new Category()
                                {
                                    Id = DbUtils.GetInt(reader, "CategoryId"),
                                    Name = DbUtils.GetString(reader, "CategoryName"),
                                }
                              
                            });
                        }
                        return posts;
                    }
                }
            }
        }

        public Post GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT p.Id, p.Title, p.Content, p.ImageLocation, p.CreateDateTime, p.PublishDateTime, p.IsApproved, p.CategoryId AS PostCategoryId, p.UserProfileId, 
                                        u.Id AS UserId, u.DisplayName, u.FirstName, u.LastName,
                                        c.Id AS CommentId, c.Subject, c.Content as CommentContent, c.CreateDateTime AS CommentCreateDateTime, c.PostId
                                        FROM Post p
                                        LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                                        LEFT JOIN Comment c ON p.Id = c.PostId
                                        WHERE p.Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader()) 
                    {
                        Post post = null;
                        while (reader.Read())
                        {
                            if (post == null)
                            {
                                post = new Post()
                                {
                                    Id = id,
                                    Title = DbUtils.GetString(reader, "Title"),
                                    Content = DbUtils.GetString(reader, "Content"),
                                    ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                                    CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                    PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),
                                    IsApproved = DbUtils.ReferenceEquals(reader, "IsApproved"),
                                    CategoryId = DbUtils.GetInt(reader, "PostCategoryId"),
                                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                    UserProfile = new UserProfile()
                                    {
                                        Id = DbUtils.GetInt(reader, "UserId"),
                                        DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                        FirstName = DbUtils.GetString(reader, "FirstName"),
                                        LastName = DbUtils.GetString(reader, "LastName"),
                                    }
                                };
                            }

                        }
                        return post;
                    }
                }
            }
        }

        public Post GetByUserId(int userId)
        {
            throw new NotImplementedException();
        }

        public void Add(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Post (Title, Content, ImageLocation, CreateDateTime, PublishDateTime, IsApproved, CategoryId, UserProfileId
                                        OUTPUT INSERTED.Id
                                        VALUES (@Title, @Content, @ImageLocation, @CreateDateTime, @PublishDateTime, @IsApproved, @CategoryId, @UserProfileId";

                    DbUtils.AddParameter(cmd, "@Title", post.Title);
                    DbUtils.AddParameter(cmd, "@Content", post.Content);
                    DbUtils.AddParameter(cmd, "@ImageLocation", post.ImageLocation);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", post.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@PublishDateTime", post.PublishDateTime);
                    DbUtils.AddParameter(cmd, "@IsApproved", post.IsApproved);
                    DbUtils.AddParameter(cmd, "@CategoryId", post.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);

                    post.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Post post)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }


    }
}
