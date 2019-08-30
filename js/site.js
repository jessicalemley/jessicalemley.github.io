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
        copyNav: function () {
            let nav = $(".navbar-nav").clone();
            nav.removeClass("navbar-nav");
            nav.addClass("__nav-overlay");
            nav.appendTo($("body"))
        }

    };

    return {

        init: function () {
            $(".navbar-toggler").on("click",
                function () {
                    pvt.showNav();
                }
            );
            pvt.copyNav();
            $(".modal-close-nav-overlay").on("click",
                function (ele) {
                    $(".__nav-overlay").removeClass("show")
                }
            );

            // Get the modal
            let modal = $("#myModal");

// Get the button that opens the modal
            $("#contact").click(
                function (e) {
                    $("#myModal").addClass("show")
                }
            );

// Get the <span> element that closes the modal
            modal.find(".close").on("click",
                function (e) {
                    $("#myModal").removeClass("show")

                }
            );


// When the user clicks anywhere outside of the modal, close it
            $(window).on("click", function (event) {
                $("#myModal").removeClass("hide")
            });
        }

    };
}();

$(document).ready(function () {
    page.init();

});