// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix

// is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  



const input = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

function diagonalDifference(arr) {
    let rightDiagnal = 0;
    let leftDiagonal = 0;
    let digonalSum = 0;let j = arr.length -1
    for(let i=0;i<arr.length;i++){
        leftDiagonal += arr[i][i];
        rightDiagnal += arr[i][j];
        j--
    }
    digonalSum = leftDiagonal-rightDiagnal
    // console.log({arr,a:arr.length,digonalSum,rightDiagnal,leftDiagonal})
    
    if(digonalSum<0){
        // returning absolute value of x
        console.log(-digonalSum)
        return -digonalSum
    }else{
        return digonalSum
    }
    
}

diagonalDifference(input)