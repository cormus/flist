var angularConfig = angular.module('app',['ngRoute']);
 
angularConfig.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   //$locationProvider.html5Mode(true);
 
   $routeProvider
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'views/home.html',
      controller     : 'HomeCtrl',
   })
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'views/contato.html',
      controller  : 'ContatoCtrl',
   }) 
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/tela', {
      templateUrl : 'views/tela.html',
      controller  : 'TelaCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
    
});

angularConfig.run(function($rootScope, $location) {
    //$rootScope.$on("$routeChangeSuccess", function(event, next, current){
    //$rootScope.$on("$routeChangeStart", function(event, next, current){
    //$rootScope.$on("$locationChangeStart", function(event, next, current){
    //$rootScope.$on("$routeChangeStart", function(event, next, current){
            //$rootScope.voltar = ' aaaaa';
            //if($rootScope.voltar == undefined)
                //alert('undefinedaaa');
   //});
});