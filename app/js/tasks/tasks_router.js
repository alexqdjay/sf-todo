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
			name:'allTasks',
			url:'/allTasks',
			views:{
				'':{
					templateUrl: BaseUrl + 'app/views/tasks/allTasks_view.html',
					controller:'AllTasksCtrl'
				}
			}
		});
	});

})();