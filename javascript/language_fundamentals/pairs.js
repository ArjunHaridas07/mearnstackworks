var arr=[2,3,4,5]
var sum=6;
for(let i of arr){
    for(let j of arr){
        if((i+j)==sum){
            console.log(`${i},${j} pairs`);
            break;
        }
    }
}
