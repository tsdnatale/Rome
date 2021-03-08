using Microsoft.Extensions.Logging;

namespace Romeo.App.Controllers
{
    public class UserController : BaseApiController<UserController>
    {
        public UserController(ILogger<UserController> logger) : base(logger)
        {

        }
    }
}