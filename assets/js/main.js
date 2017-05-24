var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var direccion = document.getElementById("direccion");
var seleccion = document.getElementById("te");
var boton =  document.getElementById("suscribirse");

function validaciones(){
	if (nombre.value != '' && email.value != '' && direccion.value != '' && seleccion.value != '') { 

		alert('Muchas gracias por suscribirte');
	
	} else {
		alert('Introduzca información requerida');
	}
}

boton.addEventListener('click', validaciones);

