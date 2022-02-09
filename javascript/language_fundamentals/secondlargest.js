var num1=10,num2=20,num3=30;
if(num1>num2 && num1>num3){
    //largest num1
    if(num2>num3){
console.log(`second largest is ${num2}`);
    }
    else{
        console.log(`second largest is ${num3}`);
    }
}
else if(num2>num1 && num2>num3){
    //lrgest num2
    if(num1>num3){
        console.log(`second largest is ${num1}`);

    }
    else{
        console.log(`second largest is ${num3}`);

    }
}
else if(num1==num2 && num1==num3){
    console.log("3 are equal");
}