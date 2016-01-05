angular.module('dealApp').controller('VendorCtrl', ['$scope', 'Restangular', function($scope, Restangular){
	var vendorsList = Restangular.all('vendors');
	vendorsList.getList().then(function(result) {
		$scope.vendors = result;
		$scope.editingData = {};
		var oldData = {};
		angular.forEach($scope.vendors, function(vendor){
			$scope.editingData[vendor.id] = false;
		});

		$scope.edit = function(id, email, full_name){
			$scope.editingData[id] = true;
			oldData = {email: email, full_name: full_name}
		};

		$scope.done = function(id){

			$scope.editingData[id] = false;
		};

		$scope.cancel = function(vendor){
			$scope.editingData[vendor.id] = false;
			angular.forEach($scope.vendors, function(owner){
				if(owner.id == vendor.id){
					owner.email = oldData.email;
					owner.full_name = oldData.full_name;
				}
			});
		};
	});
}]);