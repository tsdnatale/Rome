namespace Romeo.App.Models
{
    public interface IUserModel
    {
        int UserId { get; set; }
        string UserName { get; set; }
    }

    public class UserModel : IUserModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
    }
}