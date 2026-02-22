function showUser(){
const user={
    name:"Janu",
    age:22,
    city:"Rajanna Sircilla"
};
displayUserInfo(user);}
function displayUserInfo(user){
    document.getElementById("n").innerText="Name: "+user.name;
    document.getElementById("a").innerText="Age: "+user.age;
    document.getElementById("c").innerText="City: "+user.city;
}
