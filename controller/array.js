var module = angular.module("myapp");


var myfunc1 = function($scope) {
    $scope.names = ['Jani', 'Hege', 'Kai', 'asd'];
    console.log('123', $scope.names)

    $scope.data = {
        theVar: "Value Two"
    };
}




var myController2 = module.controller("myController2", myfunc1);
