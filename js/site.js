page = function () {

    let pvt = {
        showNav: function () {
            let overlay = $(".__nav-overlay");
            if (overlay.hasClass("show")) {
                overlay.removeClass("show")
            } else {
                overlay.addClass("show")
            }
        },
        copyNav: function() {
            let nav = $(".navbar-nav").clone();
            nav.removeClass("navbar-nav");
            nav.addClass("__nav-overlay");
            nav.appendTo($("body"))
        }

    };

    return {

        init: function () {
            $(".navbar-toggler").click(
                function () {
                    pvt.showNav();
                }
            );
            pvt.copyNav();
            $(".modal-close-nav-overlay").click(
                function (ele) {
                    $(".__nav-overlay").removeClass("show")
                }
            )
        }

    };
}();

$(document).ready(function () {
    page.init();

});