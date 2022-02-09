var arr1=[10,11,12,20,30]
var arr2=[11,20,21,22,30]
for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1==num2){
            console.log(num1);
        }
    }
}