// Complete the repeatedString function below.
function repeatedString(s, n) {
let numOfAs =0;
let occurencesOfA = 0;

// for loop for a case with repeatition with out a remainder
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            occurencesOfA += 1;
        }
    }
    numOfAs = Math.floor(n/s.length) * occurencesOfA;
    let tailStringLength  = n % s.length;

// add the for loop for cases with remainders
    for (let j =0; j< tailStringLength; j++){
        if(s[j]==='a'){
            numOfAs++;
        }
    }

return numOfAs;

}

// repeatedString version two
function repeatedStringTwo(s, n) {
let numOfAs =0;

if (n >= s.length){
    let occurencesOfA = [...s].filter(e => e ==='a').length;
    numOfAs = Math.floor(n / s.length) * occurencesOfA;
}

    let tailStringLength  = n % s.length;

// same  as above for loop for cases with remainders
    for (let j =0; j< tailStringLength; j++){
        if(s[j]==='a'){
            numOfAs++;
        }
    }

return numOfAs;

}

 const numOfChars = 10;
 const string = 'aba';
 console.log(`Total: ${repeatedString(string,numOfChars)} number of a's`);