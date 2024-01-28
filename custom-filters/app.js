(function () {
'use strict';
angular.module('MsgApp', [])

.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);
    
MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
    $scope.name = "Anish";
    $scope.stateOfBeing = "alright";
    $scope.sayMessage = function () {
        return "Anish likes to be good!";
    }
    $scope.sayLovesMessage = function () {
        var msg = "Anish likes to be good!";
        msg = lovesFilter(msg)
        return msg;
    }
    $scope.sayHi = function () {
        $scope.stateOfBeing = "happy"
    }
}

function LovesFilter() {
    return function (input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    };
} 

function TruthFilter() {
    return function (input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
    }
}
})();