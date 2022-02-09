var expenses=[10000,20000,30000,40000]
var maxExp=0;
for(let amount of expenses){
    if(maxExp<amount){
        maxExp=amount
    }
}
console.log(maxExp);