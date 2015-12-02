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