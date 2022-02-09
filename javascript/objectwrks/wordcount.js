//
//var text = "hello hai hello hai"
//step 1 split string into words
//var words = text.split(" ")
//var wordCount = {}
//for (let word of words) {
   // if (word in wordCount) {
   //     wordCount[word] += 1
   // }
  //  else {
  ////      wordCount[word] = 1
   // }

//}
//console.log(wordCount);
//text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
//console.log(wordCount);

var pattern="ABABBC"
var wc= {}//A:1,B:1..next A

//find first recusive character
for(let char of pattern){//A
   if(char in wc){
      console.log(`${char} is first recursive character`);
      break
   }
   else{
      wc[char]=1
   }
}

