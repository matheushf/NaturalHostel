$(function () {

    $(".localizacoes-destino").click(function () {
        // Ao clicar em uma localização de origem recarregar o mapa com a origem certa
        initMap($(this).attr('id'));
    });

});

// Função para inicializar o maps
function initMap(origem) {

    natural_hostel = {lat: -27.608471, lng: -48.453070};

    origem_obj = {
        aeroporto: {lat: -27.668024, lng: -48.545819},
        rodoviaria: {lat: -27.597116, lng: -48.557669},
        ponte_da_ilha: {lat: -27.598098, lng: -48.560033}
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: natural_hostel,
        scrollwheel: true,
        zoom: 7,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN
            ]
        }
    });

    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
    });

    // Set destination, origin and travel mode.
    var request = {
        destination: natural_hostel,
        origin: origem_obj[origem],
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