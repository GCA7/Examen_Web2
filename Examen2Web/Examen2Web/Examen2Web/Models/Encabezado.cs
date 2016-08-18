namespace Examen2Web.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Encabezado")]
    public partial class Encabezado
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        public int? id_producto { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? id_cliente { get; set; }

        public DateTime? fecha { get; set; }

        public int? monto_total { get; set; }

        public int? subtotal { get; set; }

        [StringLength(50)]
        public string impuesto { get; set; }
    }
}
