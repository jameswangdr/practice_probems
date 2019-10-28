function scoreboard(scores, alice) {
    let m = alice.length
    let results = []
    let nodup = [...new Set(scores)]

    for (i = 0; i < m; i++) {
        for (j = 0; j < nodup.length; j++) {
            if (alice[i] >= nodup[j]) {
                results.push(j + 1)
                break
            }
            else if (alice[i] < nodup[nodup.length - 1]){
                results.push(nodup.length + 1);
                break
            }
        }
    }
    return (results);
}

// let scores = [100, 90, 90, 80, 75, 60]
let scores = [100, 100, 50, 40, 40, 20, 10]
// let alice = [50, 77]
// let alice = [50,65,77,90,102]
let alice = [5, 25, 50, 120]

console.log(scoreboard(scores, alice));