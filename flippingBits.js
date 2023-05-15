// You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer

//Sample Input

// 3 
// 2147483647 
// 1 
// 0

// Sample Output

// 2147483648 
// 4294967294 
// 4294967295

// the commented function is another way to solve the questions

// function flipBits(number) {
//     const bitmask = 0xFFFFFFFF; // All 32 bits set to 1
//     const flippedNumber = number ^ bitmask;
//     return flippedNumber >>> 0; // Convert to unsigned integer
//   }

function flippingBits(n) {
    // Write your code here

    // have used NOT"~" and Left Shift"<<"
let flipped =( ~n >>> 0)
    console.log({n, flipped})
    return flipped

}

console.log(flippingBits(3))

// I have used the Bitwise operator to solve this problem.
//bitwise operators in programming operate in the individual bits of binnary representation of numbers. they manpulate the binnary digits (0s and 1s) at the bit level to perform the operations.