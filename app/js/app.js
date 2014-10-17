/**
 * mainApp
 *
 * by alex
 *
 */

;
(function(){
    'use strict';

	angular.module('sf.const',[]);
	angular.module('sf.services',['sf.const']);
	angular.module('sf.filters',[]);
	angular.module('sf.directives',['sf.const']);
	angular.module('sf.routers',['sf.const','ui.router']);
	angular.module('sf.controllers',['sf.services']);

	// Declare app level module which depends on filters, and services
	angular.module('sf.mainApp', [
		'sf.services',
		'sf.directives',
		'sf.controllers',
		'sf.routers'
	]);

})();





