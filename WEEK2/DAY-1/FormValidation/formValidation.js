function validateName(){
    let name = document.getElementById("name").value;
    if(name === ""){
        document.getElementById("nameMsg").innerText = "Name cannot be empty";
        return false;
    } else {
        document.getElementById("nameMsg").innerText = "";
        return true;
    }
}

function validateEmail(){
    let email = document.getElementById("email").value;
    if(!email.includes("@")){
        document.getElementById("emailMsg").innerText = "Email must contain @";
        return false;
    } else {
        document.getElementById("emailMsg").innerText = "";
        return true;
    }
}

function validateAge(){
    let age = parseInt(document.getElementById("num").value);
    if(isNaN(age) || age <= 18){
        document.getElementById("ageMsg").innerText = "Age must be greater than 18";
        return false;
    } else {
        document.getElementById("ageMsg").innerText = "";
        return true;
    }
}

// Submit function: stores data in sessionStorage if valid
function submitForm(){
    let validName = validateName();
    let validEmail = validateEmail();
    let validAge = validateAge();

    if(validName && validEmail && validAge){
        sessionStorage.setItem("name", document.getElementById("name").value);
        sessionStorage.setItem("email", document.getElementById("email").value);
        sessionStorage.setItem("age", document.getElementById("num").value);
        alert("Registration successful! Data saved in sessionStorage.");
    } else {
        alert("Please fix errors before submitting.");
    }
}