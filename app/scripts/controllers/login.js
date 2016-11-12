'use strict';

/**
 * @ngdoc function
 * @name authenticationPsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the authenticationPsApp
 */
angular.module('authenticationPsApp')
  .controller('LoginCtrl', function ($scope,alert,auth) {
    $scope.submit = function(){
         auth.login($scope.email,$scope.password)
            .success(function(res){
               alert('success','Welcome','Thanks for coming back' + res.user.email +'!' );
         })
        .error(function(err){
          alert('warning','something went wrong');
        })
    };
  });
