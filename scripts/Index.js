/* 
    Autor: Daniel Carril Miranda (nothing developer)
    GitHub: 
*/
//Validar que el nombre no sea vacio
const nombre = document.getElementById("name");

const NameValid = nombre => {
    if (nombre.textcontent === "") {
        alert("introduce un nombre");
        return false;
    } return true;
}

/* const NameValid = nombre => {
    boton = document.getElementById("button");
    boton.addEventListener("click", ()=> {
    if (nombre.textcontent === null) {
        alert("introduce un nombre");
        return false;
    } return true;
    });
} */

//Validar que la dirección de correo sea válida
//Validar el evnío del submit{
const validarFormulario = ()=>{
    const nombre = document.getElementById("name").value;
    const contraseña = document.getElementById("password").value;

    return validarNombre(nombre) && validarContraseña(contraseña);
}

document.getElementById("enviar").onsubmit= ()=>{
    return validarFormulario();
};

const enviarFormulario = () => {
    
}
