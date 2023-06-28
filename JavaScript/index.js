function login() {
    alert("Bienvenido Happy Kids!")
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
         usuario= prompt("Ingrese un usuario")
        while (usuario == ""){
            usuario= prompt("Ingrese un usuario valido")
        }
         contra = prompt("Ingrese una contraseña, esta debe ser de al menos 8 caracteres ")
        while (contra.length <= 7 ){
            contra = prompt("introduzca una contraseña valida")
        }
        alert("Bienveido" + usuario + "! \n Esperamos que tengas una experiencia increible" )
    }else{
        let usuario = prompt("ingrese su usuario")
        while (usuario.length == 0 ){
            usuario = prompt("ingrese un usuario valido")
        }
        let contra = prompt("ingrse su contraseña")
        while (contra.length == 0 ){
            contra = prompt("ingrse un contraseña valida")
        }
        alert("¡Hola " + usuario +"! \n ¡Te extrañamos!") 
    }
}
login();