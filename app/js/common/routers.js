/**
 *
 * TODO 设置各种router
 * Created by jolin on 2014/10/17.
 */
;
(function () {
	'use strict';

	angular.module('sf.routers')
	.config([ '$stateProvider', '$urlRouterProvider','Config','BaseUrl',
		function($stateProvider,   $urlRouterProvider, Config, BaseUrl){

			var routers = Config.routers;

			routers.push({
				name:'home',
				url:'/',
				views:{
					'':{
						templateUrl: BaseUrl + 'app/views/infra/home_view.html'
					}
				}
			});

			$.each(routers, function(){
				$stateProvider.state(this.name, this);
			});

			$urlRouterProvider.otherwise('/');

		}]).

	run(function($rootScope,   $state,   $stateParams){
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
	});

})();