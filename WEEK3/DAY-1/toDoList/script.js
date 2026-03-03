$(document).ready(function() {

    function updateCounts() {
        var total = $("#taskList li").length;
        var completed = $("#taskList li.completed").length;

        $("#totalCount").text(total);
        $("#completedCount").text(completed);
    }

    $("#addBtn").click(function() {

        var taskText = $("#taskInput").val().trim();

        if (taskText !== "") {

            $("#taskList").append(
                "<li>" +
                "<span class='taskText'>" + taskText + "</span>" +
                "<button class='deleteBtn'>Delete</button>" +
                "</li>"
            );

            $("#taskInput").val("");
            updateCounts();
        }

    });

    $("#taskList").on("click", ".taskText", function() {
        $(this).parent().toggleClass("completed");
        updateCounts();
    });

    $("#taskList").on("click", ".deleteBtn", function() {
        $(this).parent().remove();
        updateCounts();
    });

});