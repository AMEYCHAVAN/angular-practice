var routerApp = angular.module('myapp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
    url: '/home',
    //      templateUrl: 'views/home.html'
  })

  .state('home2', {
    url: '/array',
    templateUrl: 'views/array.html',
    controller: 'myController2'

  })

  .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
      // controller: function($scope) {
      //     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      // }
    })
    .state('lo', {
      url: '/login',
      templateUrl: 'views/login.html'
    })


});
