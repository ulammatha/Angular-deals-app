var dealApp = angular.module('dealApp', ['ngRoute', 'restangular']);

dealApp.config(['$routeProvider', 'RestangularProvider',
	function($routeProvider, RestangularProvider) {
		RestangularProvider.setBaseUrl('http://127.0.0.1:3000/api/v1'); 
		RestangularProvider.setDefaultHeaders({
			'Content-Type': 'application/json'
		});
//		$routeProvider.
//			when('/vendorlist', {
//				controller: 'VendorCtrl', 
//				templateUrl: 'index.html'
//			});
	}
]);
