'use strict';

/**
 * @ngdoc service
 * @name authenticationPsApp.alert
 * @description
 * # alert
 * Service in the authenticationPsApp.
 */
angular.module('authenticationPsApp')
  .service('alert', function alert($rootScope,$timeout) {
    var alertTimeout;
    return function(type,title,message,timeout){
      $rootScope.alert ={
        hasBeenShown: true,
        show: true,
        message: message,
        title:title
      };
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function() {
        $rootScope.alert.show = false;
      },timeout || 2000);
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
