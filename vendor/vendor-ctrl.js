angular.module('dealApp').controller('VendorCtrl', ['$scope', 'Restangular', function($scope, Restangular){
	var vendorsList = Restangular.all('vendors');
	vendorsList.getList().then(function(result) {
		$scope.vendors = result;
	});
}]);