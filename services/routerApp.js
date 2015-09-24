var routerApp = angular.module('myapp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
      //      templateUrl: 'views/home.html'
        })

        .state('home2', {
            url: '/home2',
            templateUrl: 'views/home.html',
            controller:'myController2'

        })

         .state('list', {
            url: '/list',
            templateUrl: 'views/list.html',
            // controller: function($scope) {
            //     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            // }
        })


      });
