
function login() {

    function persona (nombre1, apellido1, correo1, usuario1, contra1){
        this.nombre = nombre1;
        this.apellido = apellido1;
        this.correo = correo1;
        this.usuario = usuario1;
        this.contra = contra1;
    
    }


const listaClientesUsuarios= []
const listaClientesContraseñas=[] 

let contraseña = document.getElementById("contraseña")
let boton = document.getElementById("boton")
let usuario = document.getElementById("usuario")

let nombreNuevo = document.getElementById("nombre-nuevo")
let apellidoNuevo = document.getElementById("apellido-nuevo")
let usuarioNuevo = document.getElementById("usuario-nuevo")
let contraseñaNuevo = document.getElementById("contraseña-nuevo")
let correoNuevo = document.getElementById("correo-nuevo")
let boton2 = document.getElementById("boton2")

const url = 'file:../baseDeDatos.json';
const url2 = 'file:../mensajeDeBienvenida.json';
let mensaje;

async function cargarDatos() {
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
  
      const data = await response.json(); 
    
      const CuentasBaseDeDatos = data;
      for (const key in CuentasBaseDeDatos) {
        if (CuentasBaseDeDatos.hasOwnProperty(key)) {
          const usuario = CuentasBaseDeDatos[key].usuario;
          const contrasena = CuentasBaseDeDatos[key].contra;
          listaClientesUsuarios.push(usuario);
          listaClientesContraseñas.push(contrasena);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  cargarDatos();

  async function mostrarToast(){
    await $.ajax({
        url: url2, 
        dataType: 'json',
        success: function(data) {
          mensaje = data.mensaje;
        },
        error: function( xhr, status, error) {
          console.error('Error:', error);
        }
      });

    Toastify({
       text: mensaje,
       duration: 1000,
       newWindow: true,
       close: true,
       gravity: "top", 
       position: "left",
       stopOnFocus: true,
       style: {
           padding:"70px",
           marginTop:"250px",
           marginLeft:"500px",
         width: "350px",
         height:"90px",
         background: "rgb(66 147 210 / 94%)",
         color:"black"
       },
       onClick: function(){}
     }).showToast();
   }
  
  

if (boton2){
    boton2.onclick = () => {
    const nuevoCliente = new persona (nombreNuevo.value, apellidoNuevo.value, correoNuevo.value, usuarioNuevo.value, contraseñaNuevo.value )
       
     window.localStorage.setItem("clientes", JSON.stringify(nuevoCliente));
     const cliente = window.localStorage.getItem("clientes");
        const clienteParseado = JSON.parse(cliente);
        listaClientesUsuarios.push(clienteParseado.usuario);
        listaClientesContraseñas.push(clienteParseado.contra);
        mostrarToast()
        setTimeout(function() {
            window.location.href = "login.html";
        }, 3000);
    }

       
}
       



    async function checkCredentials() {

        if (listaClientesUsuarios.includes(usuario.value) && listaClientesContraseñas.includes(contraseña.value)) {
            return true;
        } else {
         
            Toastify({
                text: "El usuario o contraseña ingresados son incorrectos, porfavor pruebe nuevamente",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    padding:"70px",
                    marginTop:"250px",
                    marginLeft:"500px",
                  width: "350px",
                  height:"90px",
                  background: "rgb(66 147 210 / 94%)",
                  color:"black"
                },
                onClick: function(){} // Callback after click
              }).showToast();
            return false;
        }
    }

    async function redirectToCatalog() {
        if (await checkCredentials()) {
            window.location.href = "catalogo.html";
        }
    }

    if (boton) {
        boton.onclick = redirectToCatalog;
    }


} 


    

login();