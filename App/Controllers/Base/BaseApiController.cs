using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Romeo.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController<T> : ControllerBase
    {
        private readonly ILogger<T> _logger;

        public BaseApiController(ILogger<T> logger)
        {
            _logger = logger;
        }
    }
}