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
    public class EncabezadoesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Encabezadoes
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IQueryable<Encabezado> GetEncabezadoes()
        {
            return db.Encabezadoes;
        }

        // GET: api/Encabezadoes/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Encabezado))]
        public async Task<IHttpActionResult> GetEncabezado(int id)
        {
            Encabezado encabezado = await db.Encabezadoes.FindAsync(id);
            if (encabezado == null)
            {
                return NotFound();
            }

            return Ok(encabezado);
        }

        // PUT: api/Encabezadoes/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEncabezado(int id, Encabezado encabezado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != encabezado.id)
            {
                return BadRequest();
            }

            db.Entry(encabezado).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EncabezadoExists(id))
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

        // POST: api/Encabezadoes
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Encabezado))]
        public async Task<IHttpActionResult> PostEncabezado(Encabezado encabezado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Encabezadoes.Add(encabezado);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EncabezadoExists(encabezado.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = encabezado.id }, encabezado);
        }

        // DELETE: api/Encabezadoes/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Encabezado))]
        public async Task<IHttpActionResult> DeleteEncabezado(int id)
        {
            Encabezado encabezado = await db.Encabezadoes.FindAsync(id);
            if (encabezado == null)
            {
                return NotFound();
            }

            db.Encabezadoes.Remove(encabezado);
            await db.SaveChangesAsync();

            return Ok(encabezado);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EncabezadoExists(int id)
        {
            return db.Encabezadoes.Count(e => e.id == id) > 0;
        }
    }
}