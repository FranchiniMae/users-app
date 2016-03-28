console.log('app.js loaded!');
var app = angular.module('usersApp', ['ui.router', 'ngResource']);

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('config');
    //this allows us to use routes without hash params!
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    // for any unmatched URL redirect to /
    $urlRouterProvider.otherwise("/");

     $stateProvider
      .state('home', {
        url: "/",
        controller: 'UsersCtrl',
        controllerAs: 'Users',
        templateUrl: "templates/users-index.html"
        // template: 'Home!'
      });
  }

 app.controller('UsersCtrl', UsersCtrl);

function UsersCtrl($scope, $http) {
  var vm = this;
  $scope.getGitInfo = function () {
  	$scope.userNotFound = false;
  	$scope.loaded = false;

  	$http.get("https://api.github.com/users/" + $scope.username)
  	.success(function (data) {
  		$scope.user = data;
  		$scope.loaded = true;
  	})
  	.error(function () {
  		$scope.userNotFound = true;
  	});
  };
}



app.service('User', function($resource) {
  return $resource('http://localhost:3000/api/users/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
