var arr=[2,3,4,5]
var pairNum=7;
var low=0,upp=arr.length-1;
var flag=0;
while(low<upp){
    let curSum=arr[low]+arr[upp]
    if(curSum==pairNum){
        flag=1;
        console.log(`pairs ${arr[low]},${arr[upp]}`);
        break;
    }
    else if(curSum<pairNum){
        low++;
    }
    else if(curSum>pairNum){
        upp--;
    }
}
if(flag==0){
    console.log("pair not found");
}