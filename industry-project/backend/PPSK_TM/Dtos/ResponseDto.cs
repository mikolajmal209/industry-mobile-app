using PPSK_TM.Models;

namespace PPSK_TM.Dtos
{
    public class ResponseDto
    {
        public string? Message { get; set; }

        public Usertable? Data { get; set; }
    }
}
