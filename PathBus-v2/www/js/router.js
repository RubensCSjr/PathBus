angular.module('starter')

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home') // futuramente, implementar função que verifica se o usuário está logado, senão redireciona para pagina de login
  $stateProvider

  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'LoginCtrl'
  })
  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html',
    controller:'HomeCtrl'
  })
  .state('criarConta',{
    url:'/criarConta',
    templateUrl:'templates/criarConta.html',
    controller:''
  })
  .state('recuperar',{
    url:'/recuperar',
    templateUrl:'templates/recuperar.html',
    controller:''
  })
  .state('listOnibus',{
    url:'/listOnibus',
    templateUrl:'templates/listOnibus.html',
    controller:'ListarBusCtrl'
  })

});
