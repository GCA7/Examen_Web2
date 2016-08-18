using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Examen2Web.Models;
using System.Web.Http.Cors;

namespace Examen2Web.Controllers
{
    public class ClientesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Clientes
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IQueryable<Clientes> GetClientes()
        {
            return db.Clientes;
        }

        // GET: api/Clientes/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Clientes))]
        public IHttpActionResult GetClientes(decimal id)
        {
            Clientes clientes = db.Clientes.Find(id);
            if (clientes == null)
            {
                return NotFound();
            }

            return Ok(clientes);
        }

        // PUT: api/Clientes/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClientes(decimal id, Clientes clientes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != clientes.cedula)
            {
                return BadRequest();
            }

            db.Entry(clientes).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientesExists(id))
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

        // POST: api/Clientes
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Clientes))]
        public IHttpActionResult PostClientes(Clientes clientes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Clientes.Add(clientes);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ClientesExists(clientes.cedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = clientes.cedula }, clientes);
        }

        // DELETE: api/Clientes/5
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [ResponseType(typeof(Clientes))]
        public IHttpActionResult DeleteClientes(decimal id)
        {
            Clientes clientes = db.Clientes.Find(id);
            if (clientes == null)
            {
                return NotFound();
            }

            db.Clientes.Remove(clientes);
            db.SaveChanges();

            return Ok(clientes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClientesExists(decimal id)
        {
            return db.Clientes.Count(e => e.cedula == id) > 0;
        }
    }
}