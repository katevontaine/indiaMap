//google map stuff
angular.module('map', [])
.controller('MapController', function ($scope, MapService) {

  MapService.getMapData().then(function (info) {
        $scope.map = map;
      }
})();
