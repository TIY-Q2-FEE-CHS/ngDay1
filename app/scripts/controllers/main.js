'use strict';

var app = angular.module('ngDay1App');
 app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addAwesome = function(item) {
    	$scope.awesomeThings.push(item);
    };
    $scope.anotherDataArr = [
    	'this is something',
    	'models dont really belong in controller'
    ];
  });
app.controller('demoController', function($scope) {
      $scope.demoData = [
        1,2,3,4,5
      ];
      $scope.addData = function(number) {
        $scope.demoData.push(number);
      };
});















