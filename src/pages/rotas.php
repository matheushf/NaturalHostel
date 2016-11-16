<?php
require_once '../libs/config.php';

get_header('Como Chegar');
?>
<link rel="stylesheet" href="/assets/css/rotas.css">

<div class="container">
    <div class="col-lg-12">
        <h3>Saindo de:</h3>
        <ul class="localizacoes-origem">
            <li><a id="aeroporto" class="localizacoes-destino">Aeroporto</a></li>
            <li><a id="rodoviaria" class="localizacoes-destino">Rodoviária</a></li>
            <li><a id="ponte_da_ilha" class="localizacoes-destino">Ponte da Ilha</a></li>
        </ul>
        
        <br>
        
    </div>
    <div class="col-lg-12">
        <div id="map"></div>
    </div>
</div>

<?php
get_footer();
?>
<script src="/assets/js/rotas.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAK7wRs0n01mC7UsDvdNem00TwUWgKAWO0"
        async defer></script>