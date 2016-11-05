<?php
require_once '../libs/config.php';

get_header('Quartos');

$quartosAll = array(
    'Jurere' => array('jurere1.jpg', 'jurere2.jpg', 'jurere3.jpg', 'jurere4.jpg'),
    'Matadeiro' => array('matadouro1.jpg', 'matadouro2.jpg', 'matadouro3.jpg'),
    'Praia Mole' => array('praia_mole1.jpg', 'praia_mole2.jpg'),
    'Joaquina' => array('joaquina1.jpg'),
    'Costão do Santinho' => array('costaoDoSantinho1.jpg', 'costaoDoSantinho2.jpg', 'costaoDoSantinho3.jpg', 'costaoDoSantinho4.jpg')
);

$quartos = array(
    'Jurere' => array('jurere1.jpg'),
    'Matadeiro' => array('matadouro1.jpg'),
    'Praia Mole' => array('praia_mole1.jpg'),
    'Joaquina' => array('joaquina1.jpg'),
    'Costão do Santinho' => array('costaoDoSantinho1.jpg')
);

?>

<div class="row">

    <?php foreach ($quartos as $quarto => $imagens) { ?>

        <?php foreach ($imagens as $img) { ?>

            <div class="col-lg-12 text-center section-rooms">

            </div>

            <div class="col-lg-4">
                <img src="/assets/img/<?= $img ?>" class="img-responsive img-rounded">
            </div>

            <div class="col-lg-8">
                <h3 class="text-center">Quarto <?= $quarto ?> </h3>
            </div>

        <?php } ?>

    <?php } ?>
</div>


</div>
