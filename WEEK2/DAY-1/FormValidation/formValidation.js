function validateName(){
    let name=document.getElementById("name").value;
    if(name===""){
        document.getElementById("nameMsg").innerText="Name cannot be empty";
        return false;
    }else{
        document.getElementById("nameMsg").innerText="";
        return true;
    }
}
function validateEmail(){
    let email=document.getElementById("email").value;
    if(!email.includes("@")){
        document.getElementById("mailMsg").innerText="email should contain @";
        return false;
    }else{
        document.getElementById("mailMsg").innerText="";
        return true;
    }
}
function validateAge(){
    let age=document.getElementById("age").value;
    if(age<=18){
        document.getElementById("ageMsg").innerText="Age must be greater than 18";
        return false;
    }else{
        document.getElementById("ageMsg").innerText="";
        return true;
    }
}
function clearNote(){
    localStorage.removeItem("myNote");
    document.getElementById("note").value="";
}
function submitForm(){
    let validName = validateName();
    let validEmail = validateEmail();
    let validAge = validateAge();

    if(validName && validEmail && validAge){
        sessionStorage.setItem("name", document.getElementById("name").value);
        sessionStorage.setItem("email", document.getElementById("email").value);
        sessionStorage.setItem("age", document.getElementById("age").value);
        alert("Registration successful! Data saved in sessionStorage.");
    } else {
        alert("Please fix errors before submitting.");
    }
}