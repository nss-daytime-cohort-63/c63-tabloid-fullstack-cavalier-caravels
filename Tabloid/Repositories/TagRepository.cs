using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration config) : base(config) { }
        public List<Tag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM Tag ORDER BY Tag.Name";
                    
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tags = new List<Tag>();

                        while (reader.Read())
                        {
                            tags.Add(new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return tags;
                    }
                }
            }
        }

        public void AddTag(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Tag ([Name])
                                        OUTPUT INSERTED.Id
                                        VALUES (@Name)";

                    DbUtils.AddParameter(cmd, "@Name", tag.Name);

                    tag.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateTag(Tag tag)
        {

        }

        public void DeleteTag(int id)
        {

        }
    }
}
