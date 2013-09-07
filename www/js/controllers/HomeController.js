'use strict';

define(['angular','js/app'],function(angular,app) {	

	var Home = {};

	/*
	use extend
	for safest way to extend application
	 */
	Home = angular.extend(Home,app);		
		
	//build controller to handle page	 
	Home.controller('HomeController',['$scope',function($scope) {
		$scope.brand = 'CordovaLabs';
		$scope.titleClick = function($event) {
			$event.preventDefault();			
		};
	}]);
	
	return Home;	

});