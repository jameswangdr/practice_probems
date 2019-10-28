// https://www.hackerrank.com/challenges/kangaroo/problem

// start location x jump distance

function kangaroo (x1, v1, x2, v2) {
    let yes = 'yes'
    let no = 'no'

    for (i = 0; i < 10000; i++) {
        x1 = x1 + v1
        x2 = x2 + v2
        if (x1 === x2) {
            return yes
        }

    }
    return no
}

console.log(kangaroo(0,3,4,2))
console.log(kangaroo(0,2,5,3))