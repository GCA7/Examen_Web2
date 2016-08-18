using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Examen2Web.Models;
using System.Web.Http.Cors;

namespace Examen2Web.Controllers
{
    public class Detalle_FacturaController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Detalle_Factura
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IQueryable<Detalle_Factura> GetDetalle_Factura()
        {
            return db.Detalle_Factura;
        }

        // GET: api/Detalle_Factura/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Detalle_Factura))]
        public async Task<IHttpActionResult> GetDetalle_Factura(int id)
        {
            Detalle_Factura detalle_Factura = await db.Detalle_Factura.FindAsync(id);
            if (detalle_Factura == null)
            {
                return NotFound();
            }

            return Ok(detalle_Factura);
        }

        // PUT: api/Detalle_Factura/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutDetalle_Factura(int id, Detalle_Factura detalle_Factura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != detalle_Factura.id)
            {
                return BadRequest();
            }

            db.Entry(detalle_Factura).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Detalle_FacturaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Detalle_Factura
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Detalle_Factura))]
        public async Task<IHttpActionResult> PostDetalle_Factura(Detalle_Factura detalle_Factura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Detalle_Factura.Add(detalle_Factura);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = detalle_Factura.id }, detalle_Factura);
        }

        // DELETE: api/Detalle_Factura/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Detalle_Factura))]
        public async Task<IHttpActionResult> DeleteDetalle_Factura(int id)
        {
            Detalle_Factura detalle_Factura = await db.Detalle_Factura.FindAsync(id);
            if (detalle_Factura == null)
            {
                return NotFound();
            }

            db.Detalle_Factura.Remove(detalle_Factura);
            await db.SaveChangesAsync();

            return Ok(detalle_Factura);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Detalle_FacturaExists(int id)
        {
            return db.Detalle_Factura.Count(e => e.id == id) > 0;
        }
    }
}