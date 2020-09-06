function wordCountEngine(document) {
  // your code goes here
  var wordMap = new Map();
  var wordList = document.split("");
  var largestCount = 0;

  for (var i = 0; i <= wordList.length-1; i++){
    var word = [];
    word.push(wordList[i].toLowerCase());
    var charArray = [];

     for (var ch in word){
        if(ch >= 'a' && ch <= 'z'){
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
  
    for (var word in wordMap.keys()){
      var counter = wordMap[word];
      var wordCounterList = conterList[counter];
      if (wordCounterList == null){
        wordCounterList = [];
      }
      wordCounterList.push(word);
      counterList[counter] = wordCounterList;
    }
    var result = [];
    for (var l = counterList.length -1; l >= 0; l-- ){
      wordCounterList = counterList[l];
      if (wordCounterList != null){
        var stringifiedOccurenceVal = toString(l);
        for (var m = 0; m <= wordCounterList.length -1; m++){
          result.push([wordCounterList[m], stringifiedOccurenceVal])
        }
      }      
    }
  return result;
}
const string = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
console.log(wordCountEngine(string))