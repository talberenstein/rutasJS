/* Utilizar el patrón IIFE */
/* Expresión de función inmediatamente invocada
** Función anónima auto ejecutable */
/*
function saluddar(){
	//codigo
}
// saludar();

(function(){
	// Aquí va el código
})();

(function(){
	alert('hola mundo');
})();

*/

/* Para qué?
** Prevenir el Hoisting
*/

/*
var x = 1
var obtenerValor = function(){
	return x;
}
x = 3;

console.log(obtenerValor());

var y = 1

var obtenerValor2 = (function(y){
	return y;
})(y);

y=3;

console.log(obtenerValor2);

*/

/* Proteger los datos */

/*
var miFuncion = (function (){
var x = 0;
var objeto = {
	getX:function(){
		return x;
	},
	incrementar: function(){
		x++;
	}
}

return objeto;

})();


miFuncion.incrementar(); // x = 1
miFuncion.incrementar(); // 2
miFuncion.incrementar(); // 3

console.log(miFuncion.getX()); // 3
miFuncion.x = 8; // Está creando una propiedad de miFuncion
console.log(miFuncion.getX()); // 3

// datos protegidos

*/ 

/* Enviar el objeto a variable global*/

/*

(function (){
var x = 0;
var objeto = {
	getX:function(){
		return x;
	},
	incrementar: function(){
		x++;
		return this;
	}
	};
	if(typeof window.objeto == 'undefined'){
	window.objeto = window.$ = objeto;
} else{
	console.log('Ya existe la libreria');
}
})();

*/
/* Patrón chain (cadena) */