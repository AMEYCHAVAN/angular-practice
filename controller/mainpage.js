var module       = angular.module("myapp");
   var myController1 = module.controller("myController1", function($scope) {
     $scope.names=['zz','aa','ww','dd'];
     console.log('123s',$scope.names)


       $scope.data = { theVar : "Value One"};
   });
