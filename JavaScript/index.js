function login() {

    function persona (nombre1, apellido1, correo1, usuario1, contra1){
        this.nombre = nombre1;
        this.apellido = apellido1;
        this.correo = correo1;
        this.usuario = usuario1;
        this.contra = contra1;
    
    }
const ClientePreArmado = new persona("John", "doe", "johndoe@gmail.com", "johndoe1", "contraseña")
const ClientePreArmado1 = new persona("Lucy", "doe", "lucydoe@gmail.com", "lucydoe1", "contraseña")
const ClientePreArmado2 = new persona("Lucas", "doe", "lucasoe@gmail.com", "lucasdoe1", "contraseña")

const listaClientesUsuarios= [ClientePreArmado.usuario, ClientePreArmado1.usuario, ClientePreArmado2.usuario]
const listaClientesContraseñas=[ClientePreArmado.contra, ClientePreArmado1.contra, ClientePreArmado2.contra] 

let contraseña = document.getElementById("contraseña")
let boton = document.getElementById("boton")
let usuario = document.getElementById("usuario")

let nombreNuevo = document.getElementById("nombre-nuevo")
let apellidoNuevo = document.getElementById("apellido-nuevo")
let usuarioNuevo = document.getElementById("usuario-nuevo")
let contraseñaNuevo = document.getElementById("contraseña-nuevo")
let correoNuevo = document.getElementById("correo-nuevo")
let boton2 = document.getElementById("boton2")




if (boton2){
    boton2.onclick = () => {
    const nuevoCliente = new persona (nombreNuevo.value, apellidoNuevo.value, correoNuevo.value, usuarioNuevo.value, contraseñaNuevo.value )
       
     window.localStorage.setItem("clientes", JSON.stringify(nuevoCliente));
       alert("Cuenta creada")
        window.location.href = "login.html";

       
}
}                
if (boton){
    boton.onclick = () => {
        const usuarioIngresado = usuario.value;
 
        const cliente = window.localStorage.getItem("clientes") ;
        const clienteParseado = JSON.parse(cliente);

        listaClientesUsuarios.push(clienteParseado.usuario)
        listaClientesContraseñas.push(clienteParseado.contra)
        

            if (listaClientesUsuarios.includes(usuario.value) && listaClientesContraseñas.includes(contraseña.value) ) {
                const loginLink = document.getElementById("login");
                loginLink.textContent = "¡Bienvenido, " + usuarioIngresado + "!";
                loginLink.href = "login.html"; 
                
                window.location.href = "catalogo.html";
            
            } else {
                alert("Usuario o contraseña ingresados incorrectos");
            }
    }
        

    

        
} 
}          

login();