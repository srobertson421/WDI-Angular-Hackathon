var gameService = angular.module('GameServices', ['ngResource']);

gameService.factory('Highscore', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/highscore');
}]);

// gameService.factory('Users', ['$resource', function($resource) {
//   return $resource('http://localhost:3000/user');
// }]);