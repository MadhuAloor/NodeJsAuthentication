'use strict';

/**
 * @ngdoc service
 * @name authenticationPsApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the authenticationPsApp.
 */
angular.module('authenticationPsApp')
  .factory('authInterceptor', function(authToken) {
   return {
      request: function(config){
         var token = authToken.getToken();
        
        if(token)
          config.headers.Authorization ='Bearer '+token;
        
        return config;
      },
     response:function(response){
       return response;
     }
    }
  });
