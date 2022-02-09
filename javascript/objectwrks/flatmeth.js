var arr=[
    [10,20,[1,2]],
    [30,31,[[12,13,[10,20]]]]
]
//spread operator
functionadd(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
