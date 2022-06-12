/*Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7=4782969. The last decimal digit of (2^200)^2^300, which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
*/

// var lastDigit = function(str1, str2){  
//     let num = Number(str1) ** Number(str2)
//     return num[num.length]
//   }

var lastDigit = function(str1, str2){

// if exponent is 0, return 1

if (parseInt(str2) === 0) return 1;

// otherwise...
// 0 always returns 0
// 1 always returns 1
// 2 rotates between 2, 4, 8, 6....
// 3 rotates between 3, 9, 7, 1....
// 4 rotates between 4, 6....
// 5 always returns 5
// 6 always returns 6
// 7 rotates between 7, 9, 3, 1....
// 8 rotates between 8, 4, 2, 6....
// 9 rotates between 9, 1....

// because we only need the final digit of str1 to determine the result, let's capture it
var seed = parseInt(str1.slice(-1)) % 10;
// at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
var exp = parseInt(str2.slice(-2)) % 4;
if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.


// so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
//

return Math.pow(seed, exp) % 10;
}