angular.module('dealApp').controller('VendorCtrl', ['$scope', 'Restangular', function($scope, Restangular){
	var vendorsList = Restangular.all('vendors');
	vendorsList.getList().then(function(result) {
		$scope.vendors = result;
		$scope.editingData = {};
		angular.forEach($scope.vendors, function(vendor){
			$scope.editingData[vendor.email] = false;
		});

		$scope.edit = function(email){
			$scope.editingData[email] = true;
		};

		$scope.done = function(email){
			$scope.editingData[email] = false;
		};
	});
}]);