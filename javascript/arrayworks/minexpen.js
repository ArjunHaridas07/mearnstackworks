var expenses=[10000,20000,30000,40000]
var minExp=expenses[0]//10k
for(let amount of expenses){//10k,20k
    if(amount<minExp){//10k-10k 10k<20k
        minExp=amount //10k 10k
    }
}
console.log(minExp);