using AngularAuth.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuth.API.Data
{
   public  interface IAuthRepository
    {

        Task<User> Register(User user, string password);
        Task<User> Login(string UserName, string password);
        Task<bool> UserExists(string UserName);
    }
}
