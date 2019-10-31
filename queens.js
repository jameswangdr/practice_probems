function queensAttack(n, k, r_q, c_q, obstacles) {
    let row = []
    let board = []
    
    for (i = 0; i < n; i++) {
        board.push(row);
    }
    for (j = 0; j < n; j++){
        row.push(0)
    }
    // board[r_q][c_q] = 1
    board[2][2] = 1

    // console.log(queen);
    console.log(board);
    console.log(board[2][2])

}

queensAttack(5, 0, 2, 2)