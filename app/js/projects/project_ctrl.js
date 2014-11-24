/**
 *
 * TODO
 * Created by jolin on 2014/10/20.
 */
;
(function () {
	'use strict';

	angular.module('sf.mainApp').controller('ProjectCtrl',['$scope','$http','$stateParams',function ProjectsCtrl($scope,$http,$stateParams) {
        $http.post('mock/infra/getProjects1.json',{tmp:Math.random()}).success(function(data) {
           $scope.projects1 = data;
           var selProj = $scope.projects1[$stateParams.projid];
           console.log('selProj',selProj);
           $scope.project1 = selProj;

        });

    }]);



})();