
(function () {
  "use strict";
  angular
    .module('map')
    .factory('/MapService', function ($http, _) {





      var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(20.1854, 64.4168),
          mapTypeId: google.maps.MapTypeId.TERRAIN
      }

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      $scope.markers = [];

      var infoWindow = new google.maps.InfoWindow();

      var createMarker = function (info){

          var marker = new google.maps.Marker({
              map: $scope.map,
              position: new google.maps.LatLng(info.lat, info.long),
              title: info.state
          });
          marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

          google.maps.event.addListener(marker, 'click', function(){
              infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
              infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);

      }

      for (i = 0; i < states.length; i++){
          createMarker(states[i]);
      }

      $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
      }



})();
