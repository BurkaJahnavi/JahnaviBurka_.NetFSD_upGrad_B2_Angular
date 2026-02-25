let marks=[35,42,53,65,99,28];

const calTotal=(arr)=>arr.reduce((sum,num)=>sum+num,0);
const calAvg=(total,n)=>total/n;
const calResult=(avg)=>avg>=40? "PASS":"FAIL";


const total = calTotal(marks);
const avg=calAvg(total,marks.length);
const res=calResult(avg);


console.log(`Total Marks: ${total}`);
console.log(`Avg Marks: ${avg}`);
console.log(`Result: ${res}`);
