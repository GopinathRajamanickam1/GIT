const  s =   "I am John ceena ceena John";
const special=[];
let sArray = s.split(" ");
function sop(sa) { 
    for(let i=0 ; i<sa.length;i++){
        if(sa[i]===sa[i+1]){
            sa.splice(i,2);
            sop(sa);
           
            return sa
        }
     
    }
    console.log(sa.join(" "));
    }
const hi = sop(sArray);
if(hi===undefined){
  // console.log(sArray.join(" "));
}
else if((hi===null)  || (hi.length===0)){
     console.log(-1);
}

//const ob ={} ; let op =[]; let k=0;
/*for(let i in sArray){
    if(ob[sArray[i]]){
        ob[sArray[i]]+=1;
    } else{
        ob[sArray[i]] =1;
    }
}

let objSize = Object.keys(ob).length;
const oj = function(ob){
    for(let i in ob){
        if(ob[i]===1){
            console.log(ob[i]);
             op[k] =i;
             k++; objSize--;
            // console.log(op);
             //return op;
        }
        else if((ob[i]!=1) && (objSize===Object.keys(ob).length)){
            return -1;
        }
       
    }
    return op.join(" ");
   
}
console.log(ob);
console.log(oj(ob)); checking the output*/



