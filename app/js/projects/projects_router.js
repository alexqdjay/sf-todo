/**
 *
 * TODO
 * Created by jolin on 2014/10/17.
 */
;
(function () {
	'use strict';

	angular.module('sf.routers').config(function(Config, BaseUrl){
		Config.routers.push({
			name:'projects',
			url:'/projects',
			views:{
				'':{
					templateUrl: BaseUrl + 'app/views/projects/projects_view.html',
					controller:'ProjectsCtrl'
				}
			}
		});
	});

})();