namespace Examen2Web.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Clientes
    {
        [Key]
        [Column(TypeName = "numeric")]
        public decimal cedula { get; set; }

        [StringLength(50)]
        public string nombre { get; set; }

        [StringLength(50)]
        public string apellido { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? fechanacimiento { get; set; }

        [StringLength(50)]
        public string direccion { get; set; }

        [StringLength(10)]
        public string estadocivil { get; set; }

        [StringLength(10)]
        public string sexo { get; set; }

        [StringLength(50)]
        public string fechaingreso { get; set; }

        [StringLength(50)]
        public string tipo { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? descuento { get; set; }
    }
}
