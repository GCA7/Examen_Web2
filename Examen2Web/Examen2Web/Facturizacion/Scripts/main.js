var apiURL = "http://localhost:53075/api/";

            
            function viewProducto() {
                debugger;
                $.get("http://localhost:53075/api/" + "Productos")
                     .done(function (formulario) {
                         CargarProductos(formulario);
                     });
            }
                
            function viewCliente() {
                debugger;
                $.get("http://localhost:53075/api/" + "Clientes")
                     .done(function (formulario) {
                         CargarClientes(formulario);
                     });
            }

            function editarUsuario(id) {
                $.get("http://localhost:53075/api/" + "Clientes", {id : id})
                     .done(function (formulario) {
                         Editar(formulario);
                     });
            }

            function EditarP(id) {
                $.get("http://localhost:53075/api/" + "Productos", { id: id })
                     .done(function (formulario) {
                         EditarProducto(formulario);
                     });
            }

            function eliminarUsuario(id) {
                $.delete("http://localhost:53075/api/" + "Clientes",{id:id})
               .done(function (data) {
                   viewCliente();
               });
            }

            function eliminarProducto(id) {
                $.delete("http://localhost:53075/api/" + "Productos", { id: id })
               .done(function (data) {
                   viewProducto();
               });
            }


            function eliminarInventario(id) {
                $.delete("http://localhost:53075/api/" + "Inventarios", { id: id })
               .done(function (data) {
                   verInventario();
               });
            }

            function verInventario() {
                $.get("http://localhost:53075/api/" + "Inventarios")
                     .done(function (data) {
                         CargarInventario(data);
                     });
            }

           
            function Editar(formulario) {
                debugger;
                location.href = "EditarUsuario.html";
                for (var i = 0; i < formulario.elementos.length; i++) {
                    document.getElementById('cedula').value = formulario.elementos[i].cedula;
                    document.getElementById('nombre').value = formulario.elementos[i].nombre;
                    document.getElementById('apellido').value = formulario.elementos[i].apellido;
                    document.getElementById('fe_nacimiento').value = formulario.elementos[i].fecha_nacimiento;
                    document.getElementById('direccion').value = formulario.elementos[i].direccion;
                    document.getElementById('estadocivil').value = formulario.elementos[i].estadocivil;
                    document.getElementById('sexo').value = formulario.elementos[i].sexo;
                    document.getElementById('feingreso').value = formulario.elementos[i].fecha_nacimiento;
                    document.getElementById('type').value = formulario.elementos[i].tipo;
                    document.getElementById('descuento').value = formulario.elementos[i].descuento;
                }
            }

         function registrarCliente() {
             var cedula = document.getElementById('cedula').value;
             var nombre = document.getElementById('nombre').value;
             var apellido = document.getElementById('apellido').value;
             var fe_nacimiento = document.getElementById('fe_nacimiento').value;
             var direccion = document.getElementById('direccion').value;
             var estadocivil = document.getElementById('estadocivil').value;
             var sexo = document.getElementById('sexo').value;
             var feingreso = document.getElementById('feingreso').value;
             var type = document.getElementById('type').value;
             var descuento = document.getElementById('descuento').value;
               $.post(apiURL + "Clientes", {
                   cedula: cedula, nombre: nombre, apellido: apellido, fechanacimiento: fe_nacimiento, direccion: direccion,
                   estadocivil: estcivil, sexo: sexo, fechaingreso: feingreso, tipo: type, descuento: descuento
               })
                .done(function (formulario) {
                    
                });
           
         }

           
         function CargarClientes(formulario) {
             var table = "";
             table += "<table id='tableClientes'>";
             table += "<thead>";
             table += "<th>Cedula</th>";
             table += "<th>Nombre</th>";
             table += "<th>Apellido</th>";
             table += "<th>Fecha Nacimiento</th>";
             table += "<th>Dirección</th>";
             table += "<th>Estado Civil</th>";
             table += "<th>Sexo</th>";
             table += "<th>FechaIngreso</th>";
             table += "<th>Tipo</th>";
             table += "<th>Descuento</th>";
             table += "<th>Accion</th>";
             table += "</thead>";
             for (var i = 0; i < formulario.elementos.length; i++) {
                 table += "<tr>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].cedula + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].nombre + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].apellido + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].fecha_nacimiento + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].direccion + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].estadocivil + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].sexo + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].fechaingreso + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].tipo + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].descuento + "'><a onClick='eliminarCliente" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarUsuario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "</tr>";
             }
             table += "</table>";
             $("#mostrar").html(table);
         }

         function CrearProducto() {
             var nombre = document.getElementById('nombre').value;
             var marca = document.getElementById('marca').value;
             var familia = document.getElementById('familia').value;
             var casafabricacion = document.getElementById('casafabricacion').value;
             var tipounidad = document.getElementById('tipounidad').value;
             var departamento = document.getElementById('departamento').value;
             var activo = document.getElementById('activo').value;
             var fechaingreso = document.getElementById('fechaingreso').value;
             var unidad = document.getElementById('unidad').value;
             var impuesto = document.getElementById('impuesto').value;
             $.post(apiURL + "Productos", {
                 nombre: nombre, marca: marca, familia: familia, casafabricacion: casafabricacion, tipounidad: tipounidad,
                 departamento: departamento, activo: activo, fechaingreso: fechaingreso, unidad: unidad, impuesto: impuesto
             })
              .done(function (formulario) {
              });

         }

         function CargarProductos(formulario) {
             var table = "";
             table += "<table id='tableProductos'>";
             table += "<thead>";
             table += "<th>nombre</th>";
             table += "<th>marca</th>";
             table += "<th>familia</th>";
             table += "<th>casafabricacion</th>";
             table += "<th>tipounidad</th>";
             table += "<th>departamento</th>";
             table += "<th>activo</th>";
             table += "<th>fechaingreso</th>";
             table += "<th>unidad</th>";
             table += "<th>impuesto</th>";
             table += "<th>Accion</th>";
             table += "</thead>";
             for (var i = 0; i < formulario.elementos.length; i++) {
                 table += "<tr>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].nombre + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].marca + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].familia + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].casafabricacion + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].tipounidad + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].departamento + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].activo + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].fechaingreso + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].unidad + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].impuesto + "'><a onClick='eliminarProducto" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarP" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "</tr>";
             }
             table += "</table>";
             $("#mostrar").html(table);
         }

         function EditarProducto(formulario) {
             debugger;
             location.href = "EditarUsuario.html";
             for (var i = 0; i < formulario.elementos.length; i++) {
                 document.getElementById('cedula').value = formulario.elementos[i].cedula;
                 document.getElementById('nombre').value = formulario.elementos[i].nombre;
                 document.getElementById('apellido').value = formulario.elementos[i].apellido;
                 document.getElementById('fe_nacimiento').value = formulario.elementos[i].fecha_nacimiento;
                 document.getElementById('direccion').value = formulario.elementos[i].direccion;
                 document.getElementById('estadocivil').value = formulario.elementos[i].estadocivil;
                 document.getElementById('sexo').value = formulario.elementos[i].sexo;
                 document.getElementById('feingreso').value = formulario.elementos[i].fecha_nacimiento;
                 document.getElementById('type').value = formulario.elementos[i].tipo;
                 document.getElementById('descuento').value = formulario.elementos[i].descuento;
             }
         }
            
         function buscarProducto() {
             $.get("http://localhost:53075/api/" + "Productos")
             .done(function (formulario) {
                 for (var i = 0; i < formulario.elementos.length; i++) {
                     document.getElementById('opcionproducto').value = formulario.elementos[i].nombre;
                 }
             });
         }

         function guardarInventario() {
             var id = 0;
             var opcion = document.getElementById('opcionproducto').value;
             var cantidad = document.getElementById('cantidad').value;
             var cantmin = document.getElementById('cantidadminima').value;
             var cantmax = document.getElementById('cantidadmaxima').value;
             var grav = document.getElementById('gravadoexcepto').value;
             $.get("http://localhost:53075/api/" + "Productos")
             .done(function (formulario) {
                 for (var i = 0; i < formulario.elementos.length; i++) {
                     if (formulario.elementos[i].nombre == opcion) {
                         id = formulario.elementos[i].id;
                     }
                 }
             });
             $.post(apiURL + "Inventarios", {
                 id_producto: id, cantidad: cantidad, cantidadminima: cantmin, cantidadmaxima: cantmax, gravadoOexcepto: grav
             })
              
         }
            

         function CargarProductos(formulario) {
             var table = "";
             table += "<table id='tableInventarios'>";
             table += "<thead>";
             table += "<th>id_producto</th>";
             table += "<th>cantidad</th>";
             table += "<th>cantidad minima</th>";
             table += "<th>cantidad maxima</th>";
             table += "<th>gravado o excepto</th>";
             table += "</thead>";
             for (var i = 0; i < formulario.elementos.length; i++) {
                 table += "<tr>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].id_producto + "'><a onClick='eliminarInventario" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarInventario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].cantidad + "'><a onClick='eliminarInventario" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarInventario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].cantidadminima + "'><a onClick='eliminarInventario" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarInventario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].cantidadmaxima + "'><a onClick='eliminarInventario" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarInventario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "<td  id='" + formulario.elementos[i].id + "'>" + formulario.elementos[i].gravadooexcepto + "'><a onClick='eliminarInventario" + (formulario.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarInventario" + (formulario.elementos[i].id) + "'>" + "Editar</a></td>";
                 table += "</tr>";
             }
             table += "</table>";
             $("#mostrar").html(table);
         }

         function EditarInventario(formulario) {
             debugger;
             location.href = "FormInventario.html";
             for (var i = 0; i < formulario.elementos.length; i++) {
                 document.getElementById('id_producto').value = formulario.elementos[i].id_producto;
                 document.getElementById('cantidad').value = formulario.elementos[i].cantidad;
                 document.getElementById('cantidadminima').value = formulario.elementos[i].cantidadminima;
                 document.getElementById('cantidadmaxima').value = formulario.elementos[i].cantidadmaxima;
                 document.getElementById('gravadooexcepto').value = formulario.elementos[i].gravadooexcepto;
             }
         }
         
         function agregarProducto() {
             var nombre = document.getElementById('nombrecliente').value;
             var selecto = document.getElementById('productos').options.selectedIndex;
             $.get("http://localhost:53075/api/" + "Productos")
             .done(function (formulario) {
                 for (var i = 0; i < formulario.elementos.length; i++) {
                     var fecha = new Date();
                     if (formulario.elementos[i].nombre == selecto) {
                         document.getElementById('impuesto').value = formulario.elementos.impuesto;
                         document.getElementById('total').value = formulario.elementos.impuesto;
                         document.getElementById('subtotal').value = 0;
                         var producto = "";
                         producto += '<td>' + selecto + '<td>';
                         producto += '<td>' + fecha.getDate() + '<td>';
                     }
                 }
                 $("#cuerpo").html(producto);
             });
         }
         
         function loadProductos(){
             $.get("http://localhost:53075/api/" + "Productos")
             .done(function (formulario) {
                 for (var i = 0; i < formulario.elementos.length; i++) {
                     var opcion= "";
                     opcion += '<option>' + formulario.elementos[i].nombre; +'</option>';
                 }
                 $("#productos").html(opcion);
             });
         }