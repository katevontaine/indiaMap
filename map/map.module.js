(function () {
  "use strict";

  angular
    .module('map', [
      'ngRoute',
      'uiGmapgoogle-maps'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'map/views/map.html',
          controller: 'MapController'
        })
        .when('/404', {
          template: '<h1> Sorry, this is not a map!</h1>'
        })
        .when('/map', {
          templateUrl: 'map/views/map.html',
          controller: 'MapController'
        })
        .otherwise({ redirectTo: '/404'});
    });

})();
