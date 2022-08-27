const s = "{{{()}}}";
const sArray = s.split("");
console.log(sArray);
const bracMap = {
    "{" : "}", 
    "[" : "]", 
    "(" : ")",
}
console.log(bracMap);

var isValid = function (s){

    var stack=[];
    for(let i=0 ; i<sArray.length ; i++){

        var item = sArray[i];
        console.log(item);

        if(bracMap[item]){
            stack.push(bracMap[item]);
            console.log(stack);
        }
    }

}

