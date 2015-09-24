var module = angular.module("myapp");


var myfunc1 = function($scope, $http, DataService, $q) {
    console.log('123', $scope.un)


    $scope.message = function() {
        return "hello" + $scope.un;
    };



    $scope.add = function(num1, num2) {
        console.log('123', num1, DataService)

        DataService.sendCommand("http://localhost:3000/login")
            .then(function(result1) {
                $scope.result = result1
            }) 
    }



}




var loginController = module.controller("loginController", ['$scope', '$location', 'DataService', '$q', myfunc1]);
