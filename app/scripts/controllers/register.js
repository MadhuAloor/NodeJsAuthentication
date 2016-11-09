'use strict';

/**
 * @ngdoc function
 * @name authenticationPsApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the authenticationPsApp
 */
angular.module('authenticationPsApp')
  .controller('RegisterCtrl', function($scope,$rootScope,$http,alert) {
    $scope.submit = function(){
       var url = 'http://localhost:3000/register';
       var user = {
         email: $scope.email,
         password:$scope.password

       };
       $http.post(url,user)
         .success(function(res){
            alert('success');
            authToken.setToken(res.token);
         })
         .error(function(err){
             alert('warning','something went wrong');
         })
    }
  });
