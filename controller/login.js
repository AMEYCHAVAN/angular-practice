var module = angular.module("myapp");


var myfunc1 = function($scope, $http) {
  console.log('123', $scope.un)
  $scope.message = function() {
    return "hello" + $scope.un;
  };

  $scope.add = function(num1, num2) {
    console.log('123', num1, num2)


    var callURL = "http://localhost:3000/login";
    //==
    $http.get(callURL)
      .success(function(data, status, headers, config) {
        $scope.result = data + status
      })
      .error(function(data, status, headers, config) {
        $scope.result = data + status
      });
    console.log(callURL)
      //===





    // $scope.result=(num1)+(num2);
  }



}









var loginController = module.controller("loginController", myfunc1);
