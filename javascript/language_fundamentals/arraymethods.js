//filter()
//map()
//sort()
//reduce()
//find()
//some()
//forEach()
//map
//arr=[10,11,12,13,14,15]

//var squares=arr.map(num=>num**2)
//console.log(squares);

//var cubes=arr.map(num=>num**3)
//console.log(cubes);

//filter
//arr=[10,11,12,13,14,15]
//console.log(arr.filter(num=>num>12));
//arr=[1,2,3,6,7,8]
//var op=arr.map(num=>num<5?num-1:num+1);
//console.log(op);

//reduce

var total=arr.reduce((n1,n2)=>n1+n2)

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)

