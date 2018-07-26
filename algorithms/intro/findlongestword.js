var sentence = ("The quick brown fox jumped over the lazy dog");

var splitSentence = sentence.split(" ");

var theLongestWordLen = 0; 
var theLongestWord = " "; 

for(var i = 0; i < splitSentence.length; i = i + 1) {
    console.log ("sentence Word", i+1,"is:", splitSentence[i]);
   if (splitSentence[i].length > theLongestWordLen) {
        theLongestWordLen = splitSentence[i].length; //takes care of L-int
        theLongestWord = splitSentence[i];
        }
    
    }
console.log("The longest word is", theLongestWord + ", and it's length is", theLongestWordLen); 
console.log(splitSentence);