using System;
using System.Collections.Generic;

namespace PPSK_TM.Models;

public partial class Machine
{
    public int MachineId { get; set; }

    public string MachineName { get; set; } = null!;

    public virtual ICollection<Datum> Data { get; set; } = new List<Datum>();
}
