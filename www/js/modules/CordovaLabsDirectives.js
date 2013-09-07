'use strict';

define(['angular'],function(angular) {

	var dir = angular.module('CordovaLabsDirectives',[]);

	/*
	main directive
	 */
	dir.directive('cordovalabs',function() {
		return {
			restrict: 'EAC',	
			transclude: true,
			template: '<div id="placer" ng-transclude></div>',
			replace: true,		
			link: function(scope,element,attrs) {
				
				if (attrs.controller != 'undefined') {
					require(['controller/'+attrs.controller]);					
				}

				if (attrs.view) {

					/*
					load partial view
					 */
					require([						
						'plugin/text/text!partial/'+attrs.view+'.html'],
						function(html) {						
								
							/*
							manually bootstrapping angularjs
							when DOM is ready
							 */												
							angular.element(document).ready(function() {	

								/*
								replace <cordovalabs /> with requested view
								 */
								element.prepend(html);													

								/*
								bootstrapping application into document
								 */		
								angular.bootstrap(document,['CordovaLabs']);								

							});

					});

				}
				
			}
		};
	});

	return dir;

});