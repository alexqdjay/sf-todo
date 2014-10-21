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
			name:'projects.project',
			url:'/project/:id',
			views:{
				'@':{
					templateUrl: BaseUrl + 'app/views/projects/project_view.html',
					controller:'ProjectCtrl'
				}
			}
		});
	});

})();