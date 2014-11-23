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
			name:'project',
			url:'/project/:projid',
			views:{
				'':{
					templateUrl: BaseUrl + 'app/views/projects/project_view.html',
					controller:'ProjectCtrl'
				}
			}
		});
	});

})();