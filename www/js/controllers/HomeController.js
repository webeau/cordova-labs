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
		$scope.welcome = 'testing2';
	}]);
	
	return Home;	

});