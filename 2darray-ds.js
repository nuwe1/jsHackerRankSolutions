// Complete the hourglassSum function below.
function hourglassSum(arr) {
    // we could set this to 3 given the problems constraings, but this allows changes
    let maxX = 3; // + (arr[0].length % 3)
    let maxY = 3; // + (arr.length % 3)
    let total = -Infinity;  // has to be -64, but used infinity because it is the smallest number posible

    // begin at y == 0
    for (let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            // sum the top of hourglass
            let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

            // get the middle of hourglass
            sum += arr[y + 1][x + 1];

            // sum the bottom of hourglass
            sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2]

            // don't store result to keep space complexity down
            if (total < sum)
                total = sum;
        }
    }

    return total;

}

function hourglassSum2(arr) {
    let max = -63;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k = 0; k < 3; k++) {
                sum += arr[i][j + k];
                sum += arr[i + 2][j + k]
            }
            if (sum > max) max = sum;
        }
    }

    return max;
}
const array = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0,], [1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0,],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0]];

console.log(`Total: ${hourglassSum(array)} is the  maximum sum of hour glass`);
console.log(`Total: ${hourglassSum2(array)} is the  maximum sum of hour glass`);