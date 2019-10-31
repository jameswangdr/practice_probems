// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    let games = 0;

    while (s - p > 0) {
        s = s - p
        p = p - d;
        if (p <= m) {
            p = m;
        }
        games++;
    }
    return games
}

console.log(howManyGames(20, 3, 6, 80));
console.log(howManyGames(20, 3, 6, 85));