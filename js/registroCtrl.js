angular
  .module('app')
  .controller('registroCtrl', ['$scope', 'Cidadaos', function($scope, Cidadaos) {
    $scope.title = "Registros de acessos";
    Cidadaos.get().then(function(data) {
      $scope.cidadaos = data;
    });
    $scope.selectedValue = 'registro';

    $scope.save = function() {
      $http.post('/api/cidadaos', cidadaos);
    
    $scope.filtro = "";

    };
  }]);