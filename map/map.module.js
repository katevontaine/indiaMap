(function () {
  "use strict";

  angular
    .module('map', [
      'ngRoute',
      'underscore',
      'map'

    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>This is my map of India.</h1>',
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

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('map', [])
    .factory('map', function ($window) {
      return $window.moment;
    });

})();
