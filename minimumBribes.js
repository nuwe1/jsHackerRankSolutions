// Complete the minimumBribes function below.
function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--) {
        if (q[i] - i > 3) {
            return `Too chaotic`;
        }
        if (q[i] > i + 1) {
            swaps += (q[i] - (i + 1));
        } else {
            if (min > q[i]) {
                min = q[i];
            } else if (q[i] != min) {
                swaps++;
            }
        }
    }

    return swaps;

}
function minimumBribes2(q) {
    let bribes = 0;
    let i = 0;
    for (let j = Math.max(0, q[i] - 2); j < i; j++)
    {
        if (q[j] > q[i]) { bribes++; }
    }


}
const currentArrayState = [2,1,5,3,4];
console.log(`Total: ${minimumBribes(currentArrayState)}`);
console.log(`Second Total: ${minimumBribes2(currentArrayState)}`);