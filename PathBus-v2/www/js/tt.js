angular.module('Fabrica')
.factory('FAB'), function ($http) {
  var FabricaData = {}
  FabricaData.url: 'https://www.reddit.com/user/'
  FabricaData.checkConnection = function () {
    $http({
      method: 'GET',
      url: FabricaData.url+'yemolai/.json'
    })
    .then(function checkConnOk(resposta) {
      console.warn('Resposta recebida com sucesso!');
    }, function checkConnFailed(resposta) {
      console.warn('Houve um erro:', resposta.statusText);
    });
  };
  FabricaData.getDados = function (user) {
    return $http.get(FabricaData.url+user+'/.json', {})
    .then(function getDadosDone(resposta) {
      if ('data' in resposta && 'children' in resposta.data) {
        var posts = resposta.data.children;
        return posts.filter(function (post) {
          return ('data' in post);
        })
        .map(function (post) {
          return {
            title: post.data.link_title,
            sub: post.data.subreddit,
            text: post.data.body,
            link: post.data.link_url
          };
        });
      } else {
        throw { message: 'resposta sem dados' };
      }
    }, function getDadosFailed(res) {
      throw {
        message: 'falhou com status ' + res.status + ': ' + res.statusText
      };
    })
    .catch(function catchErrors(e) {
      console.error('ERRO! Mensagem: '+ e.message);
    })
  }
  return FabricaData;
})
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/fabrica');
  $stateProvider.state('fabrica', {
    url: '/fabrica',
    templateUrl: 'fabrica.html',
    controller: 'FabricaCtrl',
    resolve: {
      DADOS: function (FAB) {
        return FAB.getDados('yemolai');
      }
    }
  })
})
.controller('FabricaCtrl', function ($scope, FAB, DADOS) {
  $scope.data = DADOS;
  FAB.checkConnection();
})







.factory('userService', function($http) {
	var users = [];

	return {
		getUsers: function(){
			return $http.get("https://www.yoursite.com/users").then(function(response){
				users = response;
				return users;
			});
		}
	}
})



.controller('MainCtrl', function($scope, userService) {
	userService.getUsers().then(function(users){
		$scope.users = users;
	});
})
