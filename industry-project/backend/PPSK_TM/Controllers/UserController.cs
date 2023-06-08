using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PPSK_TM.Dtos;
using PPSK_TM.Models;
using PPSK_TM.Password;
using PPSK_TM.Services;

namespace PPSK_TM.Controllers
{
    [Route("api")]
    [EnableCors("AllowOrigin")]
    [Produces("application/json")]
    public class UserController : Controller
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("users")]

        public async Task<IActionResult> getUsers(string name)
        {
            var response = _service.GetUsers(name);

            return Ok(response);
        }

        [HttpPost]
        [Route("user")]
        public IActionResult Adduser([FromBody] NewUserDto newUser)
        {
            var name = newUser.UserName;
            var password = newUser.Password;
            var roleId = newUser.RoleId;
            
            var response = _service.AddUser(name, password, roleId);
 
            return Ok(response);
        }


        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] DtoUser User)
        {

            var name = User.UserName;
            var password = User.Password;

            var response = _service.Login(name, password);

            return Ok(response);
        }

        
        [HttpPut]
        [Route("update")]

        public IActionResult Updateuser([FromBody] UpdatedUserDto updatedUser)
        {
            var oldName = updatedUser.UserName;
            var password = updatedUser.Password;
            var roleId = updatedUser.RoleId;
            var newName = updatedUser.NewName;

            var response = _service.Update(oldName, newName, password, roleId);

            return Ok(response);
        }
    }
}
