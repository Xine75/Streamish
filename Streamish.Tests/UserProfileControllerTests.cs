using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Streamish.Models;
using Streamish.Tests.Mocks;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using Streamish.Controllers;

namespace Streamish.Tests
{
    public class UserProfileControllerTests
    {
        [Fact]
        public void Get_Returns_All_Users()
        {
            //Arrange
            var userCount = 20;
            var users = CreateTestUsers(userCount);

            var repo = new InMemoryUserRepository(users);
            var controller = new UserProfileController(repo);

            //Act
            var result = controller.Get();

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var actualUsers = Assert.IsType<List<UserProfile>>(okResult.Value);

            Assert.Equal(userCount, actualUsers.Count);
            Assert.Equal(users, actualUsers);
        }

        private List<UserProfile>CreateTestUsers(int count)
        {
            var users = new List<UserProfile>();
            for (var i = 1; i <= count; i++)
            {
                users.Add(new UserProfile()
                {
                    Id = i,
                    Name = $"Name{i}",
                    Email = $"Email{i}",
                    ImageUrl = $"http://userProfile.url/{i}",
                    DateCreated = DateTime.Today.AddDays(-i),
                });
            }
            return users;
        }
            

    }
}
