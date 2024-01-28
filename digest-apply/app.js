(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
    $scope.counter = 0;

    // Find Angular specific service that handles the same functionality,
    // e.g. $timeout

    $scope.upCounter = function () {
        $timeout(function () {
            $scope.counter++;
            console.log("Counter incremented!");
        }, 2000);
    };
    
    // Wrap custom code inside of $apply
    //
    // $scope.upCounter = function () {
    //     setTimeout(function () {
    //         $scope.$apply(function () {
    //             $scope.counter++;
    //             console.log("Counter incremented!");
    //         });
    //     }, 2000);
    // };

    // Call $digest after custom code
    //
    // $scope.upCounter = function () {
    //     setTimeout(function () {
    //         $scope.counter++;
    //         console.log("Counter incremented!");
    //         $scope.$digest();
    //     }, 2000);
    // };
}

})();