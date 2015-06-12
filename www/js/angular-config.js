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
   .when('/contact', {
      templateUrl : 'views/contact.html',
      controller  : 'ContactCtrl',
   }) 
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/news', {
      templateUrl : 'views/news.html',
      controller  : 'NewsCtrl',
   })
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/news/:id_noticia', {
      templateUrl : 'views/news.html',
      controller  : 'NewsCtrl',
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