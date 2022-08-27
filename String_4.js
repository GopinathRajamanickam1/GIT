const s = "Gopi";
const sArray = s.split("");
let count = 0;
for(let i in sArray){
    if((sArray[i]==='a') || (sArray[i]==='e') || (sArray[i]==='i') || (sArray[i]==='o') || (sArray[i]==='u')){
         count++;
    }
}
if(count>0){
    console.log("yes ---------");
}
else{
    console.log("No");
}