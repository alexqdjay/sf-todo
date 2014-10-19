/**
 * Created by wanjie on 2014/10/19.
 */
(function () {
    'use strict';

    angular.module('sf.mainApp').controller('TestCtrl', ['$scope', function($scope){

        $scope.date = new Date();

        var e = $('#colorBlock');
        $scope.w = e.width();
        $scope.h = e.height();

        $scope.click = function(){
            $scope.w = parseInt($scope.w) + 10;
            $scope.h = parseInt($scope.h) + 10;
        }

        $scope.$watch('w',
            function(to, from){
                e.width(to);
            }
        );

        $scope.$watch('h',
            function(to, from){
                e.height(to);
            }
        );

    }]);

})();