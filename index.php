<!DOCTYPE html>
<html ng-app="geral"><!-- ng-app utilizado na tag html para rodar o modulo criado -->
<head>
	<meta charset="UTF-8">
	<title> Angularjs Estudos </title>
	
	<!-- FOLHAS DE ESTILO -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />

</head>
<body>
	<div id="container">
		<header>
			<div class="title" ng-controller="titulo as geral">
				<h1> {{geral.title.nome}}</h1>
				<p> {{geral.title.desc}} </p>
			</div>
			<nav>
				<ul class="menu" ng-init="section = 1"><!-- ng-init:'seleciono o item inicial do menu pela var section' -->
					<li ng-class="{classeAtivo:section === 1}"><a href="#/" ng-click="section= 1">Home</a></li><!-- ng-class:'adiciono uma class do css' -->
					<li ng-class="{classeAtivo:section === 2}"><a href="#/imagens" ng-click="section= 2 ">Imagens</a></li>
					<li ng-class="{classeAtivo:section === 3}"><a href="#/inputs" ng-click="section= 3 ">Inputs</a></li>
					<li ng-class="{classeAtivo:section === 4}"><a href="#/calculadora" ng-click="section= 4 ">Canculadora</a></li>
				</ul>
			</nav>
		</header>
		<div class="sections" ng-view>
		</div>	
		<footer>
			
		</footer>
	</div>
    <!-- SCRIPTS JS-->
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-route.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>