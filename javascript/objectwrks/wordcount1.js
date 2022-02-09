var array=[10,10,20,20,30,30,40,40,50,50,50]
var wc={}
for(let word of array){
    if(word in wc){
        wc[word]+=1
   }
    else{
      wc[word]=1
    }
}
console.log(wc);
//array.map(num=>num in wc?wc[num]+=1:wc[num]=1)
//console.log(wc);