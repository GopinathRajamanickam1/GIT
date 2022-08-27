const  s =  "aabbcc";
const sArray = s.split("");
const fin = new Set(sArray);
console.log(fin.size);
if(fin.size===3){
    console.log("Wonder        ");
}
else{
    console.log(-1);
}


