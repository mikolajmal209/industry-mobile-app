using System.Drawing.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.MSIdentity.Shared;
using Newtonsoft.Json;
using PPSK_TM.Dtos;
using PPSK_TM.Models;
using PPSK_TM.Password;

namespace PPSK_TM.Services
{
    public class UserService : IUserService
    {
        private readonly PostgresContext _context;

        public UserService(PostgresContext context)
        {
            _context = context;
        }

 
        public string AddUser(string name, string password, int RoleId)
        {
            var message = "success";
            if (name == null || password == null || RoleId == null)
            {
                message = "Bad request";
            }

            if (!PasswordValidator.ValidatePassword(password))
            {
                message = "Bad password";
            }

            if (RoleId != 1 && RoleId != 2)
            {
                message = "Bad role";
            }

            var isUserExists = _context.Usertables.Any(c => c.Username == name || c.Password == password);

            if (isUserExists)
            {
                message = "This user already exists";
            }

            if (message == "success")
            {
                var user = new Usertable()
                {
                    Username = name,
                    Password = password,
                    RoleId = RoleId,
                };
                _context.Add<Usertable>(user);
                _context.SaveChangesAsync();

                var response = new ResponseDto()
                {
                    Message = message,
                    Data = user
                };

                return JsonConvert.SerializeObject(response);
            }
            else
            {
                return JsonConvert.SerializeObject(message);
            }
      
        }

        public string GetUsers(string name)
        {
            var message = "Success";
            var users = _context.Usertables.Where(c=> c.Username.Contains(name)).ToList();
            if (name == null)
            {
                users = _context.Usertables.ToList();
            }

            var response = new ListResponseDto()
            {
                Message = message,
                List = users
            };
            return JsonConvert.SerializeObject(response);
        }

  
        public string Login(string name, string password)
        {

            var messsage = "Success";
            var user = _context.Usertables.FirstOrDefault(c => c.Username == name);

            if (user == null)
            {
                messsage = "There is not such user with this username";
                return JsonConvert.SerializeObject(messsage);
            }

            if (password != user.Password)
            {

                messsage = "Bad password";
            }

            var result = new ResponseDto()
            {
                Data = user,
                Message = messsage
            };
            var response = JsonConvert.SerializeObject(result);
            return response;
        }



        public string Update(string oldname, string newName, string newPasssword, int newRoleId)
        {
            var user = _context.Usertables.FirstOrDefault(c => c.Username == oldname);
            var message = "Success";

            if (user == null)
            {
                message = "User not found";
                var res = new ResponseDto()
                {
                    Data = null,
                    Message = message
                };
                return JsonConvert.SerializeObject(res);
            }

            var updatedUser = new Usertable()
            {
                Id = user.Id,
                Username = newName,
                Password = newPasssword,
                RoleId = newRoleId,
            };

            _context.Entry(user).CurrentValues.SetValues(updatedUser);
            _context.SaveChanges();

            var responseDto  = new ResponseDto()
            {
                Data = updatedUser,
                Message = message
            };

            var response = JsonConvert.SerializeObject(responseDto);

            return response; 
        }
    }
}
