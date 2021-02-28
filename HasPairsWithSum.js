// Given an array find if any pairs is equla to given su

// 1. Assuming input to the function is an array nd sum and output is true or false.
// Clarifying Questions to interviewer - Are the numbers in memory ok yes Array ?, Fixed no of elements or scalable, are they whole numbers of floats, no strings
// can we take the numbers at same index to make a pair , sorted array or not
//  Can input grow OR Is there are fixed num of elements - scalable
// are they negatives - yes can occure
// Input [1,2,3,4]  sum = 8   answer false , [1,2,3,5]   answer 5 yes
// Is Array sorted - no.
// Is time complexity impportnt r space complexity - efficient sln
/// 2. Naive/brute approach talk to interviewer about the approach to show your though process and that you are thinking before coding. DONT START CODING YET
// two for loops 
// go through lenght of array 1 for loop 
/// another loop starts with next index i + 1
/// if the sum of elements value equls 8 then return true else false
/// Not the most efficient solution as time complexity is two foor loops Big O(n^2) and not readable. It would work but time consuming.
///

// NAIVE SOLUTION
// const pairsWithASum = function (arr, sum) {
//     for (i = 0; i <= arr.length - 1; i++) {
//         for (j = i + 1; j <= arr.length - 1; j++) {
//             if (arr[i] + arr[j] === sum)
//                 return true;
//         }
//     }
//     return false;
// };

// 2nd most efficient solution
/// Loop through the array and do a binary search fr the difference.

// Efficient solution
// loop through the array
//  log the sum - element difference in a set 
//  if element found in set true 
// else log the sum -element difference in set
// return false after iteration
// Time complexity Big O(n) - Linear time
// but trade off is on space complexity will be Big O(n)
const hasPairsWithASum2 = function (arr, sum) {
    /// create a new set
    var map = new Set();
    /// Loop through all elements
    for (let i = 0; i < arr.length; i++) {
        /// if element in set return true
        if (map.has(arr[i]))
            return true;
        else
            map.add(sum - arr[i]);  ////  else add the difference sum-element to set
    }  //// loop close
    return false;  /// return false
}

// Efficient in terms of Time complexity
// would write unit tests to make the function fail and woudld test it with varound inputs no params , 0 , null, undefined.


// Input 
const inputArray = [null, -2, 5, 10]
const inputSum = 8

// Calling code
console.log(hasPairsWithASum2(inputArray, inputSum));

arr = [1,2,3,5,1,3,8,9,8]

