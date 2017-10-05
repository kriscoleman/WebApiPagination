using System.Web.Http;

namespace API.Controllers
{
    public class StuffsController : ApiController
    {
        /// <summary>
        /// Gets the stuffs.
        /// </summary>
        [HttpGet]
        [Route("stuffs")]
        public void GetStuffs()
        {

        }
    }
}