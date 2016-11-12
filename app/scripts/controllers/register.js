'use strict';

/**
 * @ngdoc function
 * @name authenticationPsApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the authenticationPsApp
 */
angular.module('authenticationPsApp')
  .controller('RegisterCtrl', function($scope,$rootScope,$http,alert,authToken,API_URL,$state,auth) {
    $scope.submit = function(){
       auth.register($scope.email,$scope.password)
         .success(function(res){
            alert('success','Account created!','Welcome,' + res.user.email +'!' );
         })
         .error(function(err){
             alert('warning','something went wrong :(',err.message);
         })
    };
  });
