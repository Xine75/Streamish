using Streamish.Models;
using Streamish.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Streamish.Tests.Mocks
{
    public class InMemoryUserRepository : IUserProfileRepository
    {
        private readonly List<UserProfile> _data;

        public List<UserProfile> InternalData
        {
            get
            {
                return _data;
            }
        }

        public InMemoryUserRepository(List<UserProfile> startingData)
        {
            _data = startingData;
        }

        public void Add(UserProfile user)
        {
            var lastUser = _data.Last();
            user.Id = lastUser.Id + 1;
            _data.Add(user);
        }

        public void Delete(int id)
        {
            var userToDelete = _data.FirstOrDefault(u => u.Id == id);
            if (userToDelete == null)
            {
                return;
            }
            _data.Remove(userToDelete);
        }

        public List<UserProfile> GetAll()
        {
            return _data;
        }

        public UserProfile GetById(int id)
        {
            return _data.FirstOrDefault(u => u.Id == id);
        }

        public void Update (UserProfile user)
        {
            var currentUser = _data.FirstOrDefault(u => u.Id == user.Id);
            if (currentUser == null)
            {
                return;
            }
            currentUser.Name = user.Name;
            currentUser.Email = user.Email;
            currentUser.ImageUrl = user.ImageUrl;
            currentUser.DateCreated = user.DateCreated;
        }

        public UserProfile GetUserByIdWithVideos (int id)
        {
            throw new NotImplementedException();
        }
    }
}
