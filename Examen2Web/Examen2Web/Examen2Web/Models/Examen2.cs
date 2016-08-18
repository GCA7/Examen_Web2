namespace Examen2Web.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Examen2 : DbContext
    {
        public Examen2()
            : base("name=Examen2")
        {
        }

        public virtual DbSet<Clientes> Clientes { get; set; }
        public virtual DbSet<Encabezado> Encabezado { get; set; }
        public virtual DbSet<Inventario> Inventario { get; set; }
        public virtual DbSet<Productos> Productos { get; set; }
        public virtual DbSet<Detalle_Factura> Detalle_Factura { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clientes>()
                .Property(e => e.cedula)
                .HasPrecision(9, 0);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.apellido)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.fechanacimiento)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.direccion)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.estadocivil)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.sexo)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.fechaingreso)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.tipo)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.descuento)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Encabezado>()
                .Property(e => e.id_cliente)
                .HasPrecision(9, 0);

            modelBuilder.Entity<Encabezado>()
                .Property(e => e.impuesto)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.producto)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.cantidad)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.cantidadminima)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.cantidadmaxima)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.gravadoOexcepto)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.marca)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.familia)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.casafabricacion)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.tipounidad)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.departamento)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.activo)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.fechaingreso)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.unidad)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.impuesto)
                .IsUnicode(false);
        }
    }
}
