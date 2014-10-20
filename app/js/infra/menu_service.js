/**
 *
 * TODO
 * Created by jolin on 2014/10/17.
 */
;
(function () {
	'use strict';

	angular.module('sf.services').

	service('MenuService',
		['$http','UrlGetFunctionFactory', function($http, UrlGetFunctionFactory){
			var debug = true;
			var getUrlFn = UrlGetFunctionFactory.getFn({},{
				getMenus:'mock/infra/getMenus.json'
			},{
                tmp:Math.random()
            }, debug);

			this.getMenus = function() {
				return $http.get(getUrlFn('getMenus'),{
					tmp:Math.random()
				});
			}

		}]);

})();