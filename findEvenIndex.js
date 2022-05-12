// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
  //Code goes here!
  let leftSide = 0;
  let rightSide = 0;

//   Loop through the array, checking the left and right side of each index. 
// For each index of the loop, split the array into two different arrays
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            leftSide = 0
        }
        else if (i == 1) {
            leftSide = arr.slice(0,i)
        }
        else {
            leftSide = arr.slice(0,i)
        }    

        // Get total of the two arrays
        rightSide = arr.slice(i+1).reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0
        )
        if (leftSide !== 0) {
            leftSide = leftSide.reduce((previousVal, currentVal) => 
                previousVal + currentVal, 0
            )
        }


        // Checks if first value is equal to second value and returns index number where this happens
        if (leftSide == rightSide) {
            return i;
        }
    }
    return -1;




  
}