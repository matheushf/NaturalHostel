$(function () {
    $(".collum-gallery").click(function () {
        $(this).find('img').toggleClass('img-full-size');
        var image = $(this).find('img');

        $(".section-viewer").html("<div class='img-full-size'></div>");
        $(".section-viewer").toggleClass('hide');

        var category = $(this).parents('.section-category');

        $(".img-full-size").html("<img src='" + image.attr('src') + "' class=''>");

    });

    $(".section-viewer").click(function () {
        $(this).toggleClass('hide');
    });
});