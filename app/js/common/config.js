/**
 *
 * TODO
 * Created by jolin on 2014/10/17.
 */
;
(function () {
	'use strict';

	var app = angular.module('sf.const');
	app.constant('BaseUrl','').


	constant('Config', {
		routers:[]
	}).

	/**
	 * 获取urlFn的factory,用于mock切换
	 *
	 */
	service('UrlGetFunctionFactory', [ 'BaseUrl', function(baseUrl){
		this.getFn = function(urlMap, debugUrlMap, debug) {
			return function(name){
				if(debug) {
					return baseUrl + debugUrlMap[name];
				} else {
					return baseUrl + urlMap[name];
				}
			}
		}
	}]);



})();