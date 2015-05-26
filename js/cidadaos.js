angular
  .module('app')
  .factory('Cidadaos', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('includes/data.json').then(function(response) {
          return response.data;
        });
      }
    };
  }])