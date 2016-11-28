<?php
require_once 'libs/config.php';

//get_header('Início', true);
?>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Natural Hostel</title>

    <!-- bower:css -->
    <!--<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="/bower_components/animate.css/animate.css"/>-->
    <!-- endbower -->

    <link rel="stylesheet" href="/assets/css/vendor.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/landing-page.css">

</head>

<body>

<div class="intro-header">
    <div class="container-fluid">
        <div class="container-fluid">

            <div class="row intro-strip animated fadeIn">
                <div class="col-lg-3">
                    <div class="intro-image animated fadeInLeft">
                        <img src="/assets/img/maça.png">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="intro-logo animated fadeInDown">
                        <center>
                            <img src="/assets/img/logo.png">
                        </center>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="intro-buttons animated fadeInRight">
                        <a class="btn btn-primary facebook"><i class="fa fa-facebook"></i>Facebook</a>
                        <a class="btn btn-primary instagram"><i class="fa fa-instagram"></i>Instagram</a>
                    </div>
                </div>
            </div>

            <!-- Arrow to indicate scroll -->
            <div class="text-center scroll-arrow">
                <a href="#">
                    <i class="fa fa-arrow-circle-down"></i>
                </a>
            </div>

        </div>
    </div>
</div>

<div class="wrapper">

    <div class="wrapper-navigation">
        <div class="container">
            <div class="row">
                <div class="menu-tabs">
                    <ul class="nav nav-tabs">
                        <li class="menu-item"><a href="/index.php" class="menu-link">Início</a></li>
                        <li class="menu-item"><a href="/pages/reserva.php" class="menu-link">Reservas</a></li>
                        <li class="menu-item"><a href="/pages/quartos.php" class="menu-link">Quartos</a></li>
                        <li class="menu-item"><a href="/pages/galeria.php" class="menu-link">Galeria</a></li>
                        <li class="menu-item"><a href="/pages/rotas.php" class="menu-link">Como Chegar</a></li>
                        <li class="menu-item"><a href="/pages/contato.php" class="menu-link">Contato</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="container wrapper-content">
        <div class="row">
            <div class="col-lg-4 about-section">
                <h3 class="text-center"> Natural Hostel </h3>
                <center>
                    <img src="/assets/img/maça.png" class="img-responsive">
                </center>
            </div>

            <div class="col-lg-8">
                <p>
                    Conectado com a natureza, com uma trilha direto para as Dunas da Joaquina, nosso hostel tem uma
                    ótima
                    localização, na Avenida das rendeiras, principal avenida da Lagoa da Conceicão.
                </p>
                <p>
                    No meio das melhores
                    boates e pubs do leste da ilha de Florianópolis, aqui você vai encontrar um local com um ótimo
                    ambiente,
                    bastante aconchegante e confortável, com possibilidade para prática de esportes aquáticos, stand-up
                    pedal, caiaque, windsurf, kitesurf, wakeboard, mergulho, passeio de barco, perfeito para quem gosta
                    de
                    fazer novas amizades e estar em contato com a natureza.
                </p>
                <p>
                    Dispondo de estacionamento próprio,
                    churrasqueira, bar, recepção 24 horas, quartos compartilhados com armários, cozinha toda equipada e
                    compartilhada, WiFi em toda propriedade, áreas externas com redes para deitar e sala de TV a cabo,
                    lugar
                    para fogueira nos fundos, venha conhecer as maravilhas de Florianópolis e se hospede em nosso
                    Hostel!

                </p>
                <br>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col-lg-12 text-center">
                <!--<h2>Quartos</h2>
                <br>-->

                <div class="col-lg-4">
                    <h3>Matadouro</h3>
                    <img src="/assets/img/matadouro1.jpg" class="img-responsive img-rounded">
                </div>

                <div class="col-lg-4">
                    <h3>Praia Mole</h3>
                    <img src="/assets/img/praia_mole1.jpg" class="img-responsive img-rounded">
                </div>

                <div class="col-lg-4">
                    <h3>Jurere</h3>
                    <img src="/assets/img/jurere1.jpg" class="img-responsive img-rounded">
                </div>

            </div>
        </div>

    </div>

    <br><br><br>

</div>

</body>
</html>