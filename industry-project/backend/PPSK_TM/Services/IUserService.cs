using Microsoft.AspNetCore.Mvc;
using PPSK_TM.Dtos;
using PPSK_TM.Models;

namespace PPSK_TM.Services
{
    public interface IUserService
    {
        string Login(string name, string password);
        string GetUsers(string name);
        string Update(string oldname, string newName, string newPasssword, int newRoleId);
        string AddUser(string name, string password, int RoleId);
    }
}
