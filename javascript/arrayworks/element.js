var arr=[10,11,1,2,3,14]
var element=3;
var flag=0;
for(let num of arr){//10
if(num==element){//10==3,11==3,1==3,2==3,3==3
    flag=1;
    break;
}
}
console.log(flag==0?"not found":"element found");

var arr=[10,11,1,2,3,14]
var element=3;
var flag=0;
for(let index in arr){
    if(element==arr[index]){
        console.log("position",index);
        flag=1;
        break;
    }
}
console.log(flag==0?"not found":"found");
