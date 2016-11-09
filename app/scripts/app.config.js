angular.module('authenticationPsApp').config(function($urlRouterProvider,$stateProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider.state('register',{
    url: '/register',
    templateUrl:'views/register.html',
    controller:'RegisterCtrl'
  })
  $stateProvider.state('main',{
    url: '/main',
    templateUrl:'views/main.html'
  })
})
