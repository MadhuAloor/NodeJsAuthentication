'use strict';

/**
 * @ngdoc function
 * @name authenticationPsApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the authenticationPsApp
 */
angular.module('authenticationPsApp')
  .controller('JobsCtrl', function ($scope,$http,API_URL,alert){
    $http.get(API_URL +'jobs').success(function(jobs){
         $scope.jobs = jobs
    }).error(function(err){
        alert('warning',"unable to get jobs",err.message);
    });
  });
