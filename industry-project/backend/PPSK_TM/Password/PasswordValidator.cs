using System.Text.RegularExpressions;

namespace PPSK_TM.Password
{
    public static class PasswordValidator
    {
        public static bool ValidatePassword(string password)
        {
            // Password requirements:
            // At least 8 characters
            // Contains at least one uppercase letter
            // Contains at least one lowercase letter
            // Contains at least one digit
            // Contains at least one special character (!@#$%^&*)

            // Regular expression pattern for password validation
            string pattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$";

            // Perform the validation using Regex.IsMatch()
            bool isValid = Regex.IsMatch(password, pattern);

            return isValid;
        }
    }
}
