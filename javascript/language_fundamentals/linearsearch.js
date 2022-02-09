var arr=[10,11,12,15,16,17,20,21,22,23,24,25]
var element=100;
var flag=0;
var count=1;
for(let num of arr){
    if(num==element){
        flag=1;
        break;
    }
    count++;
}
console.log(flag==0?"e nf":"found");
console.log(count);
//linear search