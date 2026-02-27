const feedbackBtn = document.getElementById("feedbackBtn");
const confirmationMsg = document.getElementById("confirmationMsg");

feedbackBtn.addEventListener("click", function() {
    const textarea = document.querySelector("textarea");
    if (textarea.value.trim() === "") {
        confirmationMsg.textContent = "Please write your feedback before submitting.";
        confirmationMsg.style.color = "red";
    } else {
        confirmationMsg.textContent = "Thank you for your feedback!";
        confirmationMsg.style.color = "green";
        textarea.value = "";
        setTimeout(() => {
            confirmationMsg.textContent = "";
        }, 3000);
    }
});