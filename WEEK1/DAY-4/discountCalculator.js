let amnt=4000;
let dis=0;
let finalAmount=0;
if(amnt>=5000){
     dis=(amnt*20/100);
}
else if(amnt>=3000){
    dis=amnt*10/100;
    
}
else {
    dis=0;
}
finalAmount=amnt-dis;
console.log("dis amount is "+dis);
console.log("Final amount is "+finalAmount);
