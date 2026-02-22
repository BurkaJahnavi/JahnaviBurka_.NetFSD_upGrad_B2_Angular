let n=19;
let res=(n>=0) ? "Number is Positive" :"Number is Negative";
console.log(res);
if(n%2===0){
    console.log("even number");
}else{
    console.log("odd number");
}
if(n>=0){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}