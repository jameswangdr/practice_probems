// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const sample = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0],
]

// const array = [
//     1, 1, 1, 0, 0, 0,
// 0, 1, 0, 0, 0, 0,
// 1, 1, 1, 0, 0, 0,
// 0, 0, 2, 4, 4, 0,
// 0, 0, 0, 2, 0, 0,
// 0, 0, 1, 2, 4, 0
// ]
function hourglass (arr) {

    // const arr1 = arr.slice(6)
    // console.log(arr1)



    let value = 0;
    let hourglasses = []
    // let value = arr[0][0] + arr[0][1] + arr[0][2] + 
    //                         arr[1][1] + 
    //             arr[2][0] + arr[2][1] + arr[2][2];
    for (i = 0; i < arr.length-2; i++) {
        for (j = 0; j < arr.length-2; j++) {
            value = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
                                arr[i+1][j+1] + 
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            hourglasses.push(value);
        }
    }

    console.log(value);
    console.log(hourglasses);
    console.log(Math.max.apply(Math, hourglasses));
    return Math.max.apply(Math, hourglasses)
    // return value
}

hourglass(sample)
// hourglass(array)