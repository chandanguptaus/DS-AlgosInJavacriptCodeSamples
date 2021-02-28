// function reverseString(str) {
//   let arrayStr = str.split("");
//   let reversedArray = [];
//   //We are using closure here so that we don't add the above variables to the global scope.
//   function addToArray(array) {
    
//     if(array.length > 0) {
//       reversedArray.push(array.pop());
//       addToArray(array);
//     }
//     return;
//   }
//   addToArray(arrayStr);
//   return reversedArray.join("");
// }

let str = 'abc';
// console.log(reverseString('mas'));
// console.log(str.substr(1));
console.log(str.charAt(0));




// // Recursive approach
// // divide and conquer
// // divide bigger problem in small problems
// // smaller problems are identical
// // smaller problem yield some result which can lead to solve the bigger problem.

