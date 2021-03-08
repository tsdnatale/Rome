using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Romeo.App.Models;

namespace Romeo.App.Controllers
{
    public class UserController : BaseApiController<UserController>
    {
        private static readonly List<UserModel> users = new();

        public UserController(ILogger<UserController> logger) : base(logger)
        {
            users.Add(new UserModel { UserId = 1, UserName = "Tim" });
        }

        [HttpGet]
        [Route("users")]
        public IActionResult GetUsers()
        {
            return Ok(users);
        }
    }
}