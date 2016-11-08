function initMap() {
    var aeroporto = {lat: -27.668024, lng: -48.545819};
    var natural_hostel = {lat: -27.608471, lng: -48.453070};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: natural_hostel,
        scrollwheel: false,
        zoom: 7
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
    });

    // Set destination, origin and travel mode.
    var request = {
        destination: natural_hostel,
        origin: aeroporto,
        travelMode: 'DRIVING'
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
        }
    });
}