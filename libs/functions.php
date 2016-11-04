<?php

define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']);

function get_header($TituloPagina, $landing = false, $Caminho = null)
{
    global $db, $config;

    if ($landing) $Caminho = 'header_landing.php';
    
    if (!isset($Caminho) &&  !$landing) $Caminho = 'header.php';

    include(DOCUMENT_ROOT . '/' . $Caminho);
}

// Footer
function get_footer($Caminho = null)
{
    global $db, $config;

    if (!isset($Caminho)) $Caminho = 'footer.php';
    include(DOCUMENT_ROOT . '/' . $Caminho);
}