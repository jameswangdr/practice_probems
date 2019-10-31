//https://www.hackerrank.com/challenges/sherlock-and-squares/problem

// function squares(a, b) {
//     let counter = 0;

//     for (i = 0; i <= b; i++) {
//         if (i*i >= a && i*i <= b) {
//             counter++
//         }
//     
//     return counter
// }

function squares(a, b) {
    let counter = 0;

    for (i = a; i <= b; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            counter++
        }
    }
    return counter
}


console.log(squares(3,9))
console.log(squares(1,26))
console.log(squares(17,24))