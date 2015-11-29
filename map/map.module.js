
(function () {
  "use strict";

  angular
    .module('map', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/map', {
          templateUrl: 'map/views/map.html',
          controller: 'MapController'
        })

        .otherwise({ redirectTo: '/404'});
    });


})();
