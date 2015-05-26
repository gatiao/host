angular
  .module('app')
  .controller('arrecadaCtrl', ['$scope', 'Cidadaos', function($scope, Cidadaos) {
    $scope.title = "Arrecadação";
    Cidadaos.get().then(function(data) {
      $scope.cidadaos = data;
    });
  }]);