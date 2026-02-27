
let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");


buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        let value = btn.innerText;

        if(value === "C"){
            display.value = "";
        }
        else if(value === "="){
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else{
            display.value += value;
        }
    });
});