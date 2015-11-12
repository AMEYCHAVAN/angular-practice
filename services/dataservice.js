/* The point of this service is to bring out something closer to a centralized data
storage. It almost always keeps the module data in the memory. */
var app = angular.module("myapp");

app.service('DataService', ['$http', '$location', '$q', function($http, $location, $q) {

    var defaultHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'application-key': "config.key"
    };

    return {
        sendCommand: function(url, cmdObject) {
            var d = $q.defer();

            $http.get(url)
                .success(function(data, status, headers, config) {
                    // 	return data + status
                    d.resolve(data)
                })
                .error(function(data, status, headers, config) {
                    return data + status
                });
            return d.promise;

        }
    }
}]);
