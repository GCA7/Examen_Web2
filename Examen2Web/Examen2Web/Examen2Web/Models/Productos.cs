namespace Examen2Web.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Productos
    {
        public int id { get; set; }

        [StringLength(50)]
        public string nombre { get; set; }

        [StringLength(50)]
        public string marca { get; set; }

        [StringLength(50)]
        public string familia { get; set; }

        [StringLength(50)]
        public string casafabricacion { get; set; }

        [StringLength(50)]
        public string tipounidad { get; set; }

        [StringLength(50)]
        public string departamento { get; set; }

        [StringLength(50)]
        public string activo { get; set; }

        [StringLength(50)]
        public string fechaingreso { get; set; }

        [StringLength(50)]
        public string unidad { get; set; }

        [StringLength(50)]
        public string impuesto { get; set; }
    }
}
