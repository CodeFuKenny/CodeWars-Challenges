/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

const { DiffieHellman } = require("crypto");

function ipsBetween(start, end){
    //TODO
    let startArr = start.split('.');
    let endArr = end.split('.');
    let startNum =[]
    let endNum = []
    // Push numbers into an array
    startArr.forEach(num => startNum.push(Number(num)));
    endArr.forEach(num => endNum.push(Number(num)));
    let diffArr = endNum.map((num,i) => num - startNum[i]);
    console.log (`This is the start array: ${startNum} and this is the end array: ${endNum}. The different array is ${diffArr}`)
    let total = diffArr.reduce((acc,current, i) => ((i!=diffArr.length-1) ? acc += current * 255 : acc += current), 0)
    console.log(total)
    return total
  }

let start = "10.0.0.0"
let end = "10.0.1.0"
ipsBetween(start,end)