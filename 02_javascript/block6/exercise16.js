
function sort1 (myObj){
    let resultArr = [];
    let misvalues =[];
   
for (var mainkey in myObj){

    let smallobj ={[mainkey] : myObj[mainkey]};
    let smallvalue =myObj[mainkey];
    for (var key in myObj){
        if (myObj[key] < smallvalue){
            smallobj = {[key] : myObj[key]}; 
            smallvalue = myObj[key];
           
        }
            
        
    }
    resultArr.push(smallobj);
    
    for (var i in smallobj){
        delete myObj[i];
    }
    
}

return [resultArr, myObj];
}

function sort(myObj){
   let result = [];
   let finalresult = [];
    while (!objectEmpty(myObj)){
        let a;
       a = sort1(myObj);
       result.push(a[0]);
       myObj=a[1];
    }
    for (let i = 0; i<result.length; i++){

       finalresult = finalresult.concat(result[i]);
    }
    return finalresult;
}

function objectEmpty (myObj){
    let i = 0;
    for (var key in myObj){
        i++;
    }
    return i === 0;
}

please = sort({a: 1, b: 20, c: 3, d: 13, e: 1, f: 4})
console.log(please);

module.exports ={
   
    sort
}

function sortNumber(a, b) {
    
    return a - b;
  }
  
  var numArray = [140000, 104, 99];
  debugger;
  numArray.sort(sortNumber);
  
  console.log(numArray);

