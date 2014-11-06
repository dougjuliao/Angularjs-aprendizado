(function(){
	var app = angular.module('geral',[]); // primeiro módulo - geral:'nome da aplicação', []:'dependencias';
	/** CONTROLLER ADD TITULO ***/
	app.controller('titulo',function(){
		this.title = titPage;
	});
	var titPage = {
		nome: 'Aprendendo Angularjs',
		desc: 'Iniciando aulas em angularjs abaixo encontra-se um menu com os exemplos que serão mostrados... clique :)'
	};
	/** CONTROLLER ADD CONTEUDO SECTION ***/
	app.controller('contentSection',function(){
		this.content = section;
	});

	var section = {
		image: [
			"img/1.png",
			"img/2.png",
			"img/3.png"
		],
		texto: function(textoInput){
			return textoInput;
		}
	}

})();