var app = angular.module('gameApp', ['ngRoute', 'GameServices', 'MainGame']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/highscores', {
    templateUrl: 'app/views/highscores.html',
    controller: 'HighscoreCtrl'
  })
  .when('/signup', {
    templateUrl: 'app/views/signup.html',
    controller: 'SignupCtrl'
  })
  .when('/login', {
    templateUrl: 'app/views/login.html',
    controller: 'LoginCtrl'
  });

  $locationProvider.html5Mode(true);
}]);

app.controller('HomeCtrl', ['$rootScope', '$scope', 'Highscore', 'Game', function($rootScope, $scope, Highscore, Game) {

  if ($rootScope.user) {
    Game.init();
  }

  $scope.scores = [];

  Highscore.query(function success(data) {
    $scope.scores = [data[0], data[1], data[2]];
  }, function error(data) {
    console.log(data);
  });
}]);

app.controller('HighscoreCtrl', ['$scope', 'Highscore', function($scope, Highscore) {
  $scope.scores = [];

  Highscore.query(function success(data) {
    $scope.scores = data;
  }, function error(data) {
    console.log(data);
  });
}]);

app.controller('SignupCtrl', ['$rootScope', '$scope', '$http', '$location', '$window', function($rootScope, $scope, $http, $location, $window) {
  $scope.newUser = {
    email: '',
    password: ''
  }

  $scope.signup = function() {
    $http.post('http://localhost:3000/user/signup', $scope.newUser)
    .success(function(data) {
      $rootScope.user = data;
      $window.localStorage['user'] = data;
      $location.path('/');
    })
    .error(function(data) {
      console.log('Error:', data);
    });
  }
}]);

app.controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$location', '$window', function($rootScope, $scope, $http, $location, $window) {
  $scope.returnUser = {
    email: '',
    password: ''
  }

  $scope.login = function() {
    $http.post('http://localhost:3000/user/login', $scope.returnUser)
    .success(function(data) {
      //console.log(data);
      $rootScope.user = data;
      $window.localStorage['user'] = data._id;
      $location.path('/');
    })
    .error(function(data) {
      console.log('Error:', data);
    });
  }
}]);






