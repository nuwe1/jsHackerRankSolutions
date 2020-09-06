// Complete the rotLeft function below.
function rotLeft(a, d) {
   const headIndex = d % a.length
   // splice adds or removes items in the array
   // a.splice(2,2) at position 2 removes two items
   // a.spice(position,numtodelete,isertion items)
    const head = a.splice(0, headIndex)
    // push method adds new items at the end of the array and returns the new length
    a.push(...head)
    return head;

}
// this is my approach but it fails some tests
function rotLeft2(a, d) {
    let lastElemPosition = a.length - 1;
    let curPosition = 0;


    for (let i = 1; i <= d; i++) {
        let movingElem = a[lastElemPosition];
        a[lastElemPosition] = a[curPosition];
        a[curPosition] = movingElem;
        curPosition += 1;
    }

    return a;

}


const arr = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97];
const  numOfRotations = 13;
console.log(`Total: ${rotLeft(arr, numOfRotations)}`);

