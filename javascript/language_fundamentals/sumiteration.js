var num=3;
var i=1;
var str=""
var sum=0;
while(i<=num){//1<3 2<3 3<=3
    str+=num;//str=""+3="3" str="3"+3 str="33"+3=333
sum=sum+Number(str)
    i++;//2 3 4
}
console.log(sum);