/*Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
*/

function solution(input, markers) {
  let markersFound = false;
  let string = input.split('')
  let newString = []
  for (letter in string){
      if((markers.includes(string[letter]))){
        markersFound = true;
      }
      if(markersFound && string[letter] == '\n'){
        markersFound = false;
      }
      if(!markersFound){
        newString.push(string[letter])
      }
  }
  return newString.join('').replace(/\s\n/,'\n').trim()
};

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])
// returns apples, plums\npears\noranges
