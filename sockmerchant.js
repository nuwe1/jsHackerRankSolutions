//Complete the sockMerhant function below for smaller inputs
function sortAndCount(n, ar) {
    let sorted = ar.sort((a,b)=> a-b);
    let pairs = 0;

    for ( let i= 0; i < n-1; i++){
        if( sorted[i]=== sorted[i+1]){
            pairs++;
            i +=1;
        }

    }

    return pairs;

}


// Complete the sockMerchant function below for larger inputs.
function sockMerchant(n, ar) {
    let pairs = 0;
    const colors = ar.reduce((acc, val) => {
        (!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});

    Object.keys(colors).forEach(n => {
        let _pair = parseInt(colors[n] / 2);
        if (_pair >= 1) pairs += _pair;
    });

    return pairs;

}

const n = 9;
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.clear();
console.log(` First Total : ${sortAndCount(n,socks)} pairs`);
console.log(`Total : ${sockMerchant(n, socks)} pairs`);