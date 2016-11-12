'use strict';

/**
 * @ngdoc function
 * @name authenticationPsApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the authenticationPsApp
 */
angular.module('authenticationPsApp')
  .controller('LogoutCtrl', function (authToken,$state) {
       authToken.removeToken();
       $state.go('main')
  });
