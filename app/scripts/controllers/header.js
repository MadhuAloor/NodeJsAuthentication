'use strict';

/**
 * @ngdoc function
 * @name authenticationPsApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the authenticationPsApp
 */
angular.module('authenticationPsApp')
  .controller('HeaderCtrl', function ($scope,authToken) {
     $scope.isAuthenticated  = authToken.isAuthenticated;
  });
