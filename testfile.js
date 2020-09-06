function wordCountEngine(document) {
  // your code goes here
  var wordMap = new Map();
  var originalString = document.toLowerCase();
  var wordList = originalString.split("");
  var largestCount = 0;

  for (var i = 0; i <= wordList.length-1; i++){
      var charArray = [];
      for (var ch of wordList) {
        if (ch >= 'a' && ch <= 'z') {
            charArray.push(ch);
        }
    }
  var cleanWord = charArray.join("");

    if (cleanWord.length >= 1){
      var count = 0
      if (cleanWord in wordMap){
        count = wordMap[cleanWord];
        count ++;
      }else{
        count = 1;
      }
      
      if (count > largestCount){
        largestCount = count;
      }
      wordMap[cleanWord] = count;
    }
    }

    counterList = new Array(largestCount + 1);
    for (var j= 0; j <= largestCount; j++){
      counterList[j] = null;
    }
  

  return charArray;
}
const string = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
console.log(wordCountEngine(string))