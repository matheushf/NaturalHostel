<?php
require_once '../libs/config.php';

get_header('Galeria de Fotos');

$imgCidade = glob('../assets/img/cidade/*.*');
$imgHostel = glob('../assets/img/hostel/*.*');
$imgPraias = glob('../assets/img/praias/*.*');

$arrayImagens = array(
    "A cidade" => glob('../assets/img/cidade/*.*'),
    "O hostel" => glob('../assets/img/hostel/*.*'),
    "Praias" => glob('../assets/img/praias/*.*')
);
?>

<link rel="stylesheet" href="/assets/css/galeria.css">

<div class='row section-viewer hide'></div>

<div class="container">
    <div class="row section-gallery">

        <?php foreach ($arrayImagens as $titulo => $imagens) { ?>

            <div class="section-category">
                <div class="col-lg-12">
                    <h2 class="text-center"><?= $titulo ?></h2>
                    <br>
                </div>

                <?php foreach ($imagens as $img) { ?>

                    <div class="col-lg-4 collum-gallery">
                        <img src="<?= $img ?>" class="img-responsive img-circle">
                    </div>

                <?php } ?>

                <br>
            </div>

        <?php } ?>

    </div>
</div>


<?php
get_footer();
?>
<script src="/assets/js/galeria.js"></script>
