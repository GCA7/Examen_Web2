namespace Examen2Web.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Detalle_Factura")]
    public partial class Detalle_Factura
    {
        [Key]
        public int id { get; set; }

        public int? id_factura { get; set; }

        public int? id_producto { get; set; }

        public int? cantidad { get; set; }

        public virtual Productos Productos { get; set; }

        public virtual Encabezado Encabezado { get; set; }

        public virtual Productos Productos1 { get; set; }
    }
}