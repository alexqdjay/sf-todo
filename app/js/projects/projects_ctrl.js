/**
 *
 * TODO
 * Created by jolin on 2014/10/20.
 */
;
(function () {
	'use strict';

	angular.module('sf.mainApp').controller('ProjectsCtrl',['$scope','$http',function ProjectsCtrl($scope,$http) {

        $http.get('mock/infra/getProjects.json',{tmp:Math.random()}).success(function(data) {
            $scope.projects=data;
        });
    }]);



})();