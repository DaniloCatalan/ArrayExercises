
// var cost =[0,3,2,3,4,5]
// var labels = ['legal','legal','illegal','legal','legal']
// var dailyCount = 1; 

// var cost = [2,5,3,11,1]
// var labels = ["legal","illegal","legal","illegal","legal"]
// var dailyCount = 2 

var cost = [2]
var labels = ["illegal"]
var dailyCount = 1 

function calculateCost(cost, labels, dailyCount){
    var acc = 0; 
    var dailyLegal = 0; 
    var maxAcc = 0 
    for(var i = 0; i <= cost.length-1; i++){
        acc = acc + cost[i]; 
        if(labels[i] == "legal"){
            dailyLegal = dailyLegal + 1
        }

        if(dailyLegal == dailyCount){
            if(acc > maxAcc){
                maxAcc = acc;
            }
            dailyLegal = 0; 
            acc = 0;
        }
    }
    return maxAcc;
}

console.log("-----"); 
console.log(calculateCost(cost,labels,dailyCount));
