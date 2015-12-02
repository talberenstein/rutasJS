(function (window, document){
	'use strict';
	var inicio = function(){
	var elemento = null,
		marco = null,
		rutas= {},
		controladores = {},
		controlador,
		libreria = {

			getID: function(id){
				elemento = document.getElementById(id);
				return this;
			}
			noSubmit: function(){
				elemento.addEventListener('submit', function(e){
					e.preventDefault();
				}, false);
				return this;
			}
		};
		return libreria;
	}


	if(typeof window.libreria == 'undefined'){
		window.libreria = window._ = inicio();
	} else{
		console.log("Se está llama ndo la libreria nuevamente");
	}

})(window, document);


_.getID('formulario').noSubmit();