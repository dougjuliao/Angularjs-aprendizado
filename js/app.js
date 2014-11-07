(function(){
	var app = angular.module('geral',['ngRoute']); // primeiro módulo - geral:'nome da aplicação', []:'dependencias';
	/** CONTROLLER ADD TITULO ***/
	app.controller('titulo',function(){
		this.title = titPage;
	});
	var titPage = {
		nome: 'Aprendendo Angularjs',
		desc: 'Iniciando aulas em angularjs abaixo encontra-se um menu com os exemplos que serão mostrados... clique :)'
	};
	/** ROTAS ***/
	app.config(function($routeProvider,$httpProvider,$locationProvider){
		$routeProvider.
		when('/',{templateUrl:'home.html'}).
		when('/imagens',{templateUrl:'imagens.html'}).
		when('/inputs',{templateUrl:'inputs.html'}).
		when('/calculadora',{templateUrl:'calculadora.html'});      
	});

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
		},
		numero: function(numInput){
			if(numInput <= 10){
				return " Você digitou "+ numInput + " e é menor ou igual a 10";
			}else if(numInput > 10){
				return " Você digitou "+ numInput + " e é maior que 10";
			}else if(typeof(numInput) === 'string'){
				return " Por favor digite números";
			}else{
				return " Hello world!!";
			}
		}
	}

})();