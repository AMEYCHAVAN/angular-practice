/* The point of this service is to bring out something closer to a centralized data
storage. It almost always keeps the module data in the memory. */
app.service('DataService',['$http', '$q', 'config', '$location', function($http, $q, config,$location) {

	var defaultHeaders = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 'Accept':'application/json', 'application-key':config.key };

	return {
    	sendCommand:function(url,cmdObject) {
    		return this.post({url:url,data:cmdObject})
    		var d = $q.defer();
    		cmdObject.headers = { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" };
    		$http.post(url,cmdObject)
    		.success(function(res) { d.resolve(res) })
    		.error(function(err,status) { d.reject(status) })
    		return d.promise;
    	},

    	sendCommands:function(commandList) {
    		return this.post({url:'erp/command/',data:commandList})
    	},

	    request:function(req) {
	    	var defer = $q.defer();
	      	req.headers = req.headers||{}
	      	var serverUrl = (req.method=='POST')?CMDURL:SERVERURL
	      	req.url = req.url.substr(0,4)==='http'?req.url:serverUrl+req.url
	      	req.headers = angular.extend(req.headers,defaultHeaders)
	      	req.headers['session-id'] = SessionService.getSession().id
	      	$http(req)
	      	.success(function(data,status,headers) { defer.resolve(data) })
	      	.error(function(err,status) {
	      		if(status!==404) {
	      			Flash.pop({title:'Something Went Wrong',body:'DataService Error',type: 'error',timout:1000});
	      		};
	    		//err.status = status;
	    		defer.reject(status)
	    		if(status==401) {
	    			localStorageService.remove('loginDetails');
	    			$location.path('/login');
	    		};
	    	})
			return defer.promise;
		},

      	post:function(req) {
      		req.method = 'POST';
			return this.request(req);
		},

		get:function(req) {
			req.method = 'GET'
			req.headers = req.headers||{}
			//req.headers=angular.extend(req.headers,defaultHeaders)
			req.headers = defaultHeaders
			return this.request(req)
      	},

      	getView:function(url) {
      		return this.get({url:url});
      	}

    };
    // AngularJS will instantiate a singleton by calling "new" on this function
 }]);
