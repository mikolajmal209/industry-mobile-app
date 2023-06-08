﻿using System;
using System.Collections.Generic;

namespace PPSK_TM.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string RoleName { get; set; } = null!;

    public virtual ICollection<Usertable> Usertables { get; set; } = new List<Usertable>();
}
