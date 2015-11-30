angular.module('map', [])
.controller('MapController', function ($scope, MapService) {

      app.controller('MapController', function(NgMap) {
        NgMap.getMap().then(function(map) {
          console.log(map.getCenter());
          console.log('markers', map.markers);
          console.log('shapes', map.shapes);
        });
});
});()
