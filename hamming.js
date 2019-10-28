// https://leetcode.com/problems/hamming-distance/

//Input: x = 1, y = 4

//Output: 2

//Explanation:
//1   (0 0 0 1)
//4   (0 1 0 0)
function hammingDistance (x, y) {

    const xArray = printBits(x)
    const yArray = printBits(y)
    let diff = 0
    
    for(let i = 0; i < xArray.length; i++) {
        if(xArray[i] !== yArray[i]) {
            diff++
        }
    }
 
    return diff
};

console.log(hammingDistance(1, 256))


function printBits(num) {
    let bitArray = []
    let count = Math.pow(2, 31);
    while (Number.isInteger(count) && count > 0) {
        if (num >= count)
            {
                num = num - count;
                count = count / 2;
                bitArray.push(1)
            }
        else if (num < count )
            {
                count = count / 2;
                bitArray.push(0)
            }
    }
    return bitArray
} 
