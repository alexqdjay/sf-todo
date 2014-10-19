/**
 *
 * TODO
 * Created by jolin on 2014/10/19.
 */
;
(function () {
	'use strict';

	angular.module('sf.mainApp').controller('LoginCtrl',
		['$scope','$http',function($scope, $http){
            $http.get('mock/infra/getValid.json',{tmp:Math.random()}).success(function(data) {
                $scope.isOk = data;
                if($scope.isOk.result){
                    $scope.showtext="登陆成功！";
                }else{
                    $scope.showtext="登陆失败！";
                }
            });
	}]);

})();