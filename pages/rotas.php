<?php
require_once '../libs/config.php';

get_header('Como Chegar');
?>
<link rel="stylesheet" href="/assets/css/rotas.css">

<div class="container">
    <div class="col-lg-12">
        <h3>Saindo de:</h3>
        <ul class="localizacoes-origem">
            <li><a href="">Aeroporto</a></li>
            <li><a href="">Rodoviária</a></li>
            <li><a href="">Ponte da Ilha</a></li>
        </ul>
        
        <br>
        
    </div>
    <div class="col-lg-12">
        <div id="map"></div>
    </div>
</div>

<script src="/assets/js/rotas.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAK7wRs0n01mC7UsDvdNem00TwUWgKAWO0&callback=initMap"
        async defer></script>