function validar(){
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cause = document.getElementById("cause");
var message = document.getElementById("message");

if (fullname.value == 0){
    alert("No puede enviar el mensaje con el campo de texto Nombre completo sin completar");
}
if (email.value == 0){
    alert("No puede enviar el mensaje con el campo de texto Email sin completar");
}
if (phone.value == 0){
    alert("No puede enviar el mensaje con el campo númerico Celular sin completar");
}
if (cause.value == 0){
    alert("No puede enviar el mensaje con el campo de texto Asunto sin completar");
}
if (message.value == 0){
    alert("No puede enviar el mensaje con el campo de texto Mensaje sin completar");
}
}