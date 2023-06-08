using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PPSK_TM.Models;

public partial class PostgresContext : DbContext
{
    public PostgresContext()
    {
    }

    public PostgresContext(DbContextOptions<PostgresContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Datum> Data { get; set; }

    public virtual DbSet<Machine> Machines { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Usertable> Usertables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Database=postgres; Username=postgres;Password=kospit21");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresExtension("pg_catalog", "adminpack");

        modelBuilder.Entity<Datum>(entity =>
        {
            entity.HasKey(e => e.DataId).HasName("data_pkey");

            entity.ToTable("data");

            entity.Property(e => e.DataId).HasColumnName("data_id");
            entity.Property(e => e.MachineId).HasColumnName("machine_id");
            entity.Property(e => e.Measure).HasColumnName("measure");
            entity.Property(e => e.Timestamp)
                .HasDefaultValueSql("now()")
                .HasColumnName("timestamp");

            entity.HasOne(d => d.Machine).WithMany(p => p.Data)
                .HasForeignKey(d => d.MachineId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("data_machine_id_fkey");
        });

        modelBuilder.Entity<Machine>(entity =>
        {
            entity.HasKey(e => e.MachineId).HasName("machines_pkey");

            entity.ToTable("machines");

            entity.Property(e => e.MachineId).HasColumnName("machine_id");
            entity.Property(e => e.MachineName)
                .HasMaxLength(255)
                .HasColumnName("machine_name");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("role_pkey");

            entity.ToTable("role");

            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(255)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<Usertable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("usertable_pkey");

            entity.ToTable("usertable");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.Usertables)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("usertable_role_id_fkey");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
