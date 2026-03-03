$(document).ready(function() {

    var count = 0;

    $(".products").on("click", ".addBtn", function() {

        count++;

        $("#cartCount").text(count);

        $(this).prop("disabled", true);

        $(this).attr("data-added", "true");

        $(this).siblings(".message").text("Added to cart");

    });

});