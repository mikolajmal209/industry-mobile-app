using PPSK_TM.Models;

namespace PPSK_TM.Dtos
{
    public class ListResponseDto : ResponseDto
    {
       public  List<Usertable>? List { get; set; }
    }
}
