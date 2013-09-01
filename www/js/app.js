'use strict';

define(['angular','module/CordovaEvents','module/CordovaLabsDirectives'],function(angular,events,dirs) {

	var CordovaLabs = angular.module('CordovaLabs',['CordovaEvents','CordovaLabsDirectives']);			
	return CordovaLabs;	

});