<?php
require_once '../libs/config.php';

get_header('Reservas');

?>

    <div class="row">
        <div class="col-lg-6">
            <h3>Reservas</h3>

            <p>Você pode reservar sua estadia utilizando os seguintes serviços: </p>

            <br>
            <p><a href="www.hostelworld.com">www.hostelworld.com</a></p>
            <p><a href="www.booking.com">www.booking.com</a></p>
            <p><a href="www.tripadvisor.com">www.tripadvisor.com</a></p>

        </div>

        <br><br>

        <div class="col-lg-2">
            <img src="/assets/img/hostel_world.png" class="img-responsive">
        </div>
        <div class="col-lg-2">
            <img src="/assets/img/logo-booking.png" class="img-responsive">
        </div>
        <div class="col-lg-2">
            <img src="/assets/img/tripadvisor.png" class="img-responsive">
        </div>

    </div>
<?php
get_footer();
