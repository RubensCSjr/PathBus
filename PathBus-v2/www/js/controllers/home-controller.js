  angular.module('starter')

.controller('HomeCtrl', function($scope, $cordovaGeolocation){

    $scope.coor;
    var coor;
    ionic.Platform.ready(function(){
    var optGPS = {timeout:15000, enableHighAccuracy: true};
    $cordovaGeolocation
    navigator.geolocation.getCurrentPosition(sucessoGet, sucessoErro, optGPS);
    function sucessoGet(suces){
      $scope.coor = suces.coords;
      verMapa(suces.coords);
    }
    function sucessoErro(error){
      console.log(error);
    }

  })
  function verMapa(coor){
    var LatLng = {lat:coor.latitude, lng:coor.longitude};
    var optGPS =  {center:{lat:coor.latitude, lng:coor.longitude},zoom:16}
    var map = new google.maps.Map(document.getElementById('map'),optGPS);
    var marker = new google.maps.Marker({position: LatLng, map:map});
    // console.log(LatLng);
  };
  // LisOnibusService.listar();
});
