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
			name:'helloWorld',
			url:'/helloWorld',
			views:{
				'':{
					templateUrl: BaseUrl + 'app/views/helloWorld_view.html',
					controller:'HelloWorldCtrl'
				}
			}
		});

        Config.routers.push({
            name:'test',
            url:'/test',
            views:{
                '':{
                    templateUrl: BaseUrl + 'app/views/test_view.html',//命名一定要规范
                    controller:'TestCtrl'
                }
            }
        });
	});

})();