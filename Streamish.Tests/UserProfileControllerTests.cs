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

        [Fact]
        public void Get_By_Id_Returns_NotFound_When_Given_Unknown_Id()
        {
            //Arrange
            var users = new List<UserProfile>(); //no users

            var repo = new InMemoryUserRepository(users);
            var controller = new UserProfileController(repo);

            //Act
            var result = controller.Get(1);

            //Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public void Get_By_Id_Returns_User_With_Given_Id()
        {
            //Arrange
            var testUserId = 99;
            var users = CreateTestUsers(5);
            users[0].Id = testUserId; //Make sure we know the Id of one of the users

            var repo = new InMemoryUserRepository(users);
            var controller = new UserProfileController(repo);

            //Act
            var result = controller.Get(testUserId);

            //Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var actualUser = Assert.IsType<UserProfile>(okResult.Value);

            Assert.Equal(testUserId, actualUser.Id);
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
