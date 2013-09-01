'use strict';

define(['angular'],function(angular) {
	
	var events = angular.module('CordovaEvents',[]);	
	
	/*
	setup multiple event handler
	 */
	events.factory('onEvent',function() {

		return {
			deviceready: function(fn) {
				this.setupEvent('deviceready',fn);
			},
			pause: function(fn) {
				this.setupEvent('pause',fn);	
			},
			resume: function(fn) {
				this.setupEvent('resume',fn);
			},
			back: function(fn) {
				this.setupEvent('backbutton',fn);
			},
			menu: function(fn) {
				this.setupEvent('menubutton',fn);
			},
			search: function(fn) {
				this.setupEvent('searchbutton',fn);
			},
			startcall: function(fn) {
				this.setupEvent('startcallbutton',fn);
			},
			endcall: function(fn) {
				this.setupEvent('endcallbutton',fn);
			},
			volumedown: function(fn) {
				this.setupEvent('volumedownbutton',fn);
			},
			volumeup: function(fn) {
				this.setupEvent('volumeupbutton',fn);
			},
			setupEvent: function(eventName,callback) {

				document.addEventListener(eventName,function() {
					callback.apply(this);
				},false);

			}
		};

	});

	return events;

});