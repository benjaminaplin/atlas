console.log('dong')

var myApp = angular.module('myApp', []);

myApp.controller('myController', function MyController($scope){

  $scope.author = {
    'name' : 'Ben Aplin', 
    'title' : 'the man',
    'company' : 'bossco'
  }

});