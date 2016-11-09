'use strict';

/**
 * @ngdoc service
 * @name authenticationPsApp.authToken
 * @description
 * # authToken
 * Factory in the authenticationPsApp.
 */
angular.module('authenticationPsApp').factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;
    // Public API here
    return {
      someToken: function (token) {
        cachedToken = token;
        storage.setItem('userToken',token);
      },
      getToken: function () {
        if(!cachedToken)
          cachedToken =storage.getItem('userToken');
      },
      isAuthenticated: function(){
        return !!this.getToken();
      }
    };
  });
