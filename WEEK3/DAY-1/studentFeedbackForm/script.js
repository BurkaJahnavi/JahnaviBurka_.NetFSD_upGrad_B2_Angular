$(document).ready(function() {

    $("#submitBtn").click(function() {

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();

        $("#errorMsg").text("");
        $("#message").text("");

        if(name === "" || email === "") {
            $("#errorMsg").text("Please fill in both Name and Email.");
        } else {
            $("#message").html("<p class='success'>Thank you for your feedback!</p>");
            $("#feedbackForm")[0].reset();
        }

    });

});