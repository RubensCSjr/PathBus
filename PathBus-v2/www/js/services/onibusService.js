angular.module('starter.service',[])

.factory('ListaService', function($http){
  var url = '';
  var getLista = function(){
    return $http.get('https://pathbus.herokuapp.com/linha');
  };
  var saveLisBus = function(onibus){
    return $http.post("", onibus);
  }
  return {
    pegarLista : getLista,
    salvarBus: saveLisBus,

  };
});
