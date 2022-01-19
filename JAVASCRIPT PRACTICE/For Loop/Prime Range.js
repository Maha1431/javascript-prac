const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Range1=prompt("Please enter the  Range1: ");

function findcount(Number){
 let count=0;
    for(var i=1;i<=Number;i++)
    {
      if(Number%i==0) 
      {
          count++;
      }
    }
    return count;
};

for( var t=1;t<=Range1;t++){
    let count = findcount(t);
    if(count==2)
    {
        console.log("PRIME ",t)
    }

}