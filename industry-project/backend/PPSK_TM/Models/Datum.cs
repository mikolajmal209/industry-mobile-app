using System;
using System.Collections.Generic;

namespace PPSK_TM.Models;

public partial class Datum
{
    public int DataId { get; set; }

    public int MachineId { get; set; }

    public double Measure { get; set; }

    public DateTime Timestamp { get; set; }

    public virtual Machine Machine { get; set; } = null!;
}
