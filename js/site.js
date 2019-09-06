page = function () {

    let pvt = {
        showNav: function () {
            $(".__nav-overlay").addClass("show");
            $(".navbar-collapse").removeClass("show");
        },
        copyNav: function () {
            let nav = $(".navbar-nav").clone();
            nav.removeClass("navbar-nav");
            nav.addClass("__nav-overlay");
            nav.appendTo($("body"))
        },
        setupMobileNavToggle: function () {
            $(".navbar-toggler").on("click",
                function () {
                    pvt.showNav();
                }
            );
            $(".modal-close-nav-overlay").on("click",
                function (ele) {
                    $(".__nav-overlay").removeClass("show");
                    $(".navbar-collapse").removeClass("show");
                }
            );
        },
        setupShowContactModal: function () {
            $("#contact").click(
                function (e) {
                    $("#myModal").addClass("show");
                    $(".parallax").addClass("modal-visible");
                    e.stopImmediatePropagation();
                }
            );

            $(".modal-content").on("click", function (e) {
                e.stopImmediatePropagation();
            });

            $("#myModal").find(".close").on("click",
                function (e) {
                    $("#myModal").removeClass("show");
                    $(".parallax").removeClass("modal-visible");
                }
            );
            $(window).on("click", function (event) {
                $("#myModal").removeClass("show");
                $(".parallax").removeClass("modal-visible");
            });
        }
    };

    return {
        init: function () {
            pvt.copyNav();
            pvt.setupMobileNavToggle();
            pvt.setupShowContactModal();
        }

    };
}();

$(document).ready(function () {
    page.init();

});