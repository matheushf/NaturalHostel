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

$descricoes = array (
    "Jurere" => "Quarto Privativo, Casal ou mais pessoas, com banheiro, ventilador e armário, com rede e vista para Lagoa da Conceição.",
    "Matadeiro" => "Quarto Compartilhado misto com rede e vista para Lagoa da Conceição.",
    "Praia Mole" => "Quarto Compartilhado misto com um Banheiro, ventilador e armário compartilhado.",
    "Joaquina" => "Quarto Compartilhado misto com um Banheiro, ventilador e armário compartilhado.",
    "Costão do Santinho" => "Quarto Compartilhado misto com um Banheiro, ventilador e armário compartilhado."
);

?>

    <link rel="stylesheet" href="/assets/css/quartos.css">

<?php foreach ($quartos as $quarto => $imagens) { ?>

    <?php foreach ($imagens as $img) { ?>

        <div class="row section-rooms">

            <div class="col-lg-4">
                <img src="/assets/img/<?= $img ?>" class="img-responsive img-rounded">
            </div>

            <div class="col-lg-8">
                <h3 class="text-center"> Quarto <?= $quarto ?> </h3>
                <br>
                <p> <?= $descricoes[$quarto] ?> </p>
                <p><a>Ver Mais +</a></p>
            </div>

        </div>

    <?php } ?>

<?php } ?>

<?php
get_footer();