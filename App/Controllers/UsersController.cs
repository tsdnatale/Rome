using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Romeo.App.Models;

namespace Romeo.App.Controllers
{
    public class UsersController : BaseApiController<UsersController>
    {
        private static readonly List<UserModel> users = new()
        {
            new UserModel { UserId = 1, UserName = "Tim" }
        };

        public UsersController(ILogger<UsersController> logger) : base(logger)
        {
        }

        [HttpGet]
        public IEnumerable<UserModel> Get()
        {
            return users;
        }
    }
}