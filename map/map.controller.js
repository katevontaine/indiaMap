(function() {

  angular
  .module('map')
   .controller('MapController', function ($scope, MapService) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        // var latlng = new google.maps.LatLng(35.7042995, 139.7597564);
        // var myOptions = {
        //     zoom: 8,
        //     center: latlng,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        //  };
        //  $scope.map = new google.maps.Map(document.getElementById('map'), myOptions);
        //  $scope.markers = [];
        //  var infoWindow = new google.maps.InfoWindow();
        //  var createMarker = function (info){
        //      var marker = new google.maps.Marker({
        //          map: $scope.map,
        //          position: new google.maps.LatLng(info.lat, info.long),
        //          title: info.state
        //      });
        //      marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
         //
        //      google.maps.event.addListener(marker, 'click', function(){
        //          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        //          infoWindow.open($scope.map, marker);
        //      });
        //      $scope.markers.push(marker);
        //  };
        //  for (var i = 0; i < states.length; i++){
        //      createMarker(states[i]);
        //  };
         $scope.openInfoWindow = function(e, selectedMarker){
             e.preventDefault();
             google.maps.event.trigger(selectedMarker, 'click');
         }
   });

})()


// })()
