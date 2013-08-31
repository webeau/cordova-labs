'use strict';

/*
based on: http://briantford.com/blog/angular-phonegap.html
 */
define(['angular'],function(angular) {
	
	var events = angular.module('CordovaEvents',[]);	
	
	/*
	setup multiple event handler
	 */
	events.factory('setupEventHandler',function() {

		return function (fn,eventName) {

			/*
			setup optional event name
			 */
			if (!eventName || eventName == 'undefined') {
				eventName = 'deviceready';
			}

		    var queue = [];

		    var impl = function () {
		      queue.push(Array.prototype.slice.call(arguments));
		    };

		    /*
		    bind handler
		     */
		    document.addEventListener(eventName, function () {
		      queue.forEach(function (args) {
	        	fn.apply(this, args);
		      });
		      impl = fn;
		    }, false);

		    return function () {
		      return impl.apply(this, arguments);
		    };
	  	};

	});

	return events;

});