/**
 *
 * TODO
 * Created by jolin on 2014/10/17.
 */
;
(function () {
	'use strict';

	angular.module('sf.mainApp').

	controller('MainCtrl',['$scope', 'MenuService', function($scope, MenuService){

			MenuService.getMenus().success(function(res){
				$scope.menus = res;
			});

			$scope.onMenuClick = function(menu){
				if(menu.children && menu.children.length>0) {
					menu.open = menu.open === true?false:true;
				}
			}


	}]);

})();