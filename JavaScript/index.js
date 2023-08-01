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

let nombreNuevo = document.getElementById("nombre-nuevo")
let apellidoNuevo = document.getElementById("apellido-nuevo")
let usuarioNuevo = document.getElementById("usuario-nuevo")
let contraseñaNuevo = document.getElementById("contraseña-nuevo")
let contraseña2Nuevo = document.getElementById("contraseña2-nuevo")
let correoNuevo = document.getElementById("correo-nuevo")
let usuario = document.getElementById("usuario")
let contraseña = document.getElementById("contraseña")
let boton = document.getElementById("boton")
let boton2 = document.getElementById("botonCrearUsuario")
let usuario2 ;
function login() {
    boton.onclick = () =>{
        console.log("funciono")
        console.log(listaClientesUsuarios)
        console.log(usuario2)
            if (usuario.value in listaClientesUsuarios )
                console.log(usuario.value)
                
            else
                alert("Usuario o contraseña ingresada incorrecta")
        }

boton2.onclick = () =>{
     usuario2 = usuarioNuevo.value
    listaClientesUsuarios.push(usuario2)
    console.log(listaClientesUsuarios)
    console.log(usuarioNuevo.value)
    listaClientesContraseñas.push(contraseñaNuevo.value)

    }   



   
}


  
    /**alert("Bienvenido Happy Kids!")
    let cliente = prompt("Es usted cliente de Happy Kids ? \nEn caso de ser cliente ingrese SI de lo contrario ingrese NO");
    while (cliente != "si" && cliente != "no"){
        cliente = prompt("Por favor ingrese una resuesta valida. \nEs usted cliente de Happy Kids? \n En caso de ser cliente ingrese SI de lo contrario ingrese NO");
    }
    if (cliente == "no"){
        let nombre= prompt("ingrese su nombre")
        while (nombre == ""){
            nombre= prompt("ingrese un nombre valido")
        }
        let apellido= prompt("ingrese su apellido")
        while (apellido == ""){
            apellido= prompt("ingrese un apellido valido")
        }
        let correo = prompt("Ingrese su correo electronico")
        while (correo == ""){
            correo= prompt("Ingrese un correo electronico valido")
        }
         let usuario = prompt("Ingrese un usuario")
        while (usuario == ""){
            usuario= prompt("Ingrese un usuario valido")
        }
         let contra = prompt("Ingrese una contraseña, esta debe ser de al menos 8 caracteres ")
        while (contra.length <= 7 ){
            contra = prompt("introduzca una contraseña valida")
        }
        alert("Bienveido " + usuario + " ! \n Esperamos que tengas una experiencia increible" )

        const nuevoCliente = new persona(nombre,apellido,correo,usuario,contra)
        alert("Su usuario se creo correctamente con los siguientes datos:" 
        + "\n Nombre: " + nuevoCliente.nombre 
        + "\n Apellido: " + nuevoCliente.apellido
        + "\n Correo Electronico : " + nuevoCliente.correo
        + "\n Usuario: " + nuevoCliente.usuario)

        listaClientes.push(nuevoCliente.usuario)
        listaClientes.push(nuevoCliente.contra)

    let logIn= prompt("¿Desea loguearse? Si, la respuesta es afirmativa ingrese SI de lo contrario NO ");
    while (logIn != "si" && cliente != "no"){
        logIn = prompt("Por favor ingrese una resuesta valida. \n Desea loguearse? Si, la respuesta es afirmativa ingrese SI de lo contrario NO");
    }

    if (logIn == "si"){
        let usuario= prompt("ingrese su Usuario")
        while (listaClientes.includes(usuario) == false){
            usuario= prompt("ingrese un nombre Usuario valido")
        } 
        let contra= prompt("ingrese su contraseña")
        while (listaClientes.includes(contra) == false){
            usuario= prompt("ingrese una contraseña valida")
        } 
        alert("¡Hola " + usuario +"! ") 
        eliminarCuenta = prompt("¿Desea eliminar su cuenta? si, la respuesta es afirmativa ingrese SI de lo contrario NO ")
        if (eliminarCuenta == "si"){
            let usuarioEliminar= prompt("ingrese su Usuario")
            let usuario2= usuarioEliminar
            while (listaClientes.includes(usuarioEliminar) == false){
                usuario = prompt("ingrese un nombre Usuario valido")
            } 
            listaClientes.pop(usuarioEliminar)
            console.log(listaClientes)
            alert("Hasta la proxima " + usuario2 + "!")
        } 
        }else{
        alert("Hasta la proxima!") 
    }

    }else{
        
        alert("En el inspect va a encontar una lista de usuarios pre-armada con la que puede probar este Log In")
        console.log("Usuario: " + ClientePreArmado.usuario  + "\n Contraseña: " + ClientePreArmado.contra);
        console.log("Usuario: " + ClientePreArmado1.usuario  + "\n Contraseña: " + ClientePreArmado1.contra);
        console.log("Usuario: " + ClientePreArmado2.usuario  + "\n Contraseña: " + ClientePreArmado2.contra);

        let usuarioPreArmado = prompt("ingrese su usuario")
        while (ListaClientesPreArmada.includes(usuarioPreArmado) == false){
            console.log(usuarioPreArmado, ListaClientesPreArmada)
            usuarioPreArmado = prompt("ingrese un usuario valido")
        }
        let contraPreArmada = prompt("ingrese su contraseña")
        while (ListaClientesPreArmada.includes(contraPreArmada) == false ){
            contraPreArmada = prompt("ingrese una contraseña valida")
        }
        alert("Bienvenido " + usuarioPreArmado + "!")
    }*/


    

login();