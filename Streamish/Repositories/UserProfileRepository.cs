using Microsoft.Extensions.Configuration;
using Streamish.Models;
using Streamish.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streamish.Repositories
{
    public class UserProfileRepository : BaseRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, Name, Email, ImageUrl, DateCreated
                    FROM UserProfile
                    ";

                    var reader = cmd.ExecuteReader();
                    var users = new List<UserProfile>();
                    while (reader.Read())
                    {
                        users.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
                        });
                    }
                    reader.Close();

                    return users;
                }
            }
        }
        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, Name, Email, ImageUrl, DateCreated
                    FROM UserProfile
                    WHERE Id = @Id
                    ";

                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    UserProfile user = null;
                    if (reader.Read())
                    {
                        user = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
                        };
                    }
                    reader.Close();
                    return user;
                }
            }
        }
    }
}
