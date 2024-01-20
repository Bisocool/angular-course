(function () {
'use strict';

angular.module('MsgApp', [])

.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.name = "Anish";
    $scope.stateOfBeing = "alright";
    $scope.sayMessage = function () {
        return "My name is Anish";
    }
    $scope.sayHi = function () {
        $scope.stateOfBeing = "happy"
    }
}
})();