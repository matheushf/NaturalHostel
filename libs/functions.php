<?php

define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']);

function get_header($TituloPagina, $Caminho = null)
{
    global $db, $config, $Form, $Grid, $usuario, $prefeitura, $Geleia;

    if (!isset($Caminho)) $Caminho = 'header.php';

    include(DOCUMENT_ROOT . '/' . $Caminho);
}

// Footer
function get_footer($Caminho = null)
{
    global $db, $config;

    if (!isset($Caminho)) $Caminho = 'footer.php';
    include(DOCUMENT_ROOT . '/' . $Caminho);
}