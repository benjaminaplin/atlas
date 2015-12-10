angular.module('atlasApp', ['ngRoute'])

.controller('ControllerMapSearch', ['MapService', function (MapService){
  var vm = this;
}])

.controller('ControllerMapListResults', ['MapService', function (MapService){
  var vm = this;
}])

.service('MapService', ['$http', function($http){
  var photos = [];
  this.getPhotos = function(){
    $http.get('/api/data').then(function(res){
      photos = res.data;
      console.log('got photos from backend upon load');
    }, function(errResponse){
      console.error('photos query error')
    });
  }
  this.listPhotos = function(){
    console.log('your listin photos')
    return photos;
  };
}])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/data', {
      templateUrl: 'js/partials/map-search.html',
      controller: 'ControllerMapSearch'
    }).
    when('/data/:id', {
      templateUrl: 'js/partials/map-list-results.html',
      controller: 'ControllerMapListResults'
    }).
    otherwise({ 
      redirectTo: '/data'
    });
}]);