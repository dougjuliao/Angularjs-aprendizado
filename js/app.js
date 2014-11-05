(function(){
	var app = angular.module('geral',[]); // primeiro módulo - geral:'nome da aplicação', []:'dependencias';
	app.controller('titulo',function(){
		this.title = titPage;
	});
	var titPage = {
		nome: 'Aprendendo Angularjs',
		desc: 'Iniciando aulas em angularjs abaixo encontra-se um menu com os exemplos que serão mostrados... clique :)'
	};
})();