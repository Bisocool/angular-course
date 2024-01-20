(function () {
'use strict';
    
 angular.module('LunchChecker', [])
.controller('LunchController', LunchController);
    
LunchController.$inject = ['$scope'];
function LunchController($scope) {
    $scope.message = "Checking...";
    $scope.items = "";
    
    $scope.lunchCheck = function () {
        var newItems = $scope.items.split(",");
        for (let i = 0; i < newItems.length; i++) {
            i += 1;
            if (i <= 3) {
                $scope.message = "Enjoy"
            } else {
                $scope.message = "Too much"
            }
            
        }
        
    }
}
    
})();