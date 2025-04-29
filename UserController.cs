using microsoft.AspNetCore.Mvc;
using newtonsoft.json;
using SERVICE-POLI.models;
namespace SERVICE-POLI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly string _jsonfilepath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "users.json");
        [HttpPost] 
        public async Task<IActionResult> Post([FromBody] DataUser user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            var json = System.IO.File.ReadAllText(_jsonfilepath);
            var users = JsonConvert.DeserializeObject<List<DataUser>>(json) ?? new List<DataUser>();
            users.Add(user);
            var updatedJson = JsonConvert.SerializeObject(users, Formatting.Indented);
            await System.IO.File.WriteAllTextAsync(_jsonfilepath, updatedJson);
        
    }
}
{
    
}