$(document).ready(function () {
    $(".flying-text").each(function (index) {
        var el = $(this);
        setTimeout(() => {
            el.addClass("animate__animated animate__fadeInUp");
        }, index * 300);
    });
});
