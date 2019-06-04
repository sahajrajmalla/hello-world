


	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope)  {
		$scope.firstName= "Sahaj";
		$scope.middleName= "Raj";
		$scope.lastName= "Malla";
		$scope.fullName= function()   {
			return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
		}
	});

