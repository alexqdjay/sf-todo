/**
 *
 * TODO
 * Created by jolin on 2014/10/17.
 */
;
(function () {
	'use strict';

	angular.module('sf.mainApp').controller('HelloWorldCtrl', ['$scope', function($scope){

		$scope.date = new Date();
        $scope.note ="大海，你全是水！";


	}]);

})();