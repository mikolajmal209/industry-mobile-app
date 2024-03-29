﻿using System;
using System.Collections.Generic;

namespace PPSK_TM.Models;

public partial class Usertable
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int RoleId { get; set; }

    public virtual Role Role { get; set; } = null!;
}
