// 01. Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//============================================================================================================================================//

const fizzBuzz = function () {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// 02. Write a program that takes an array of integers and returns the sum of all the numbers in the array that are greater than 10.

//============================================================================================================================================//

const controlledSum = function (arr) {
  let sum = 0;
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      sum += arr[i];
      sumArr.push(arr[i]);
    }
  }
  console.log(sumArr);
  return `The sum of all the numbers in the array that are greater than 10 is ${sum}`;
};

const array = [2, 9, 28, 11, 7, 38, 29, 15, 9, 10, 77, 92];

console.log(controlledSum(array));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// 03. Write a program that takes an array of integers and returns the average of all the numbers in the array.

//============================================================================================================================================//

const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`The sum of all elements are ${sum}`);
  console.log(`Length of the array is ${arr.length}`);
  return `The average of all the numbers in the array is ${sum / arr.length}`;
};

const arr = [6, 3, 7, 2, 4, 9, 10, 14, 17, 12];

console.log(average(arr));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// 04. You are a lumberjack and you have been tasked with cutting down trees in a forest. Each tree has a certain height, and you have been given a height threshold of 10. You can only cut down trees that are taller than the threshold. Write a program that takes an array of tree heights and outputs the total height of the trees that you can cut down.

//============================================================================================================================================//

const lumberjack = function (treesHeight, threshold) {
  let totalHeight = 0;
  let totalTree = [];
  for (let i = 0; i < treesHeight.length; i++) {
    if (treesHeight[i] > threshold) {
      totalHeight += treesHeight[i];
      totalTree.push(treesHeight[i]);
    }
  }
  return `There are ${totalTree.length} trees the are highre then the threshold ${threshold} and total height of them are ${totalHeight}`;
};

const trees = [12, 43, 8, 16, 9, 20, 33, 26, 11, 10, 6, 31];

console.log(lumberjack(trees, 10));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// Write a function that takes an array of numbers and returns a new array with only the even numbers.

//============================================================================================================================================//

const evenNum = function (arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
};

console.log(evenNum([5, 2, 8, 1, 9, 4, 7, 3, 6, 10]));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// Write a function that takes two arrays of numbers and returns a new array with the numbers that appear in both arrays.

//============================================================================================================================================//

const commonNum = function (arr1, arr2) {
  let commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonArr.push(arr2[j]);
      }
    }
  }
  return commonArr;
};

console.log(commonNum([2, 4, 6, 8, 10, 12], [3, 6, 9, 10, 12, 15, 18]));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

//============================================================================================================================================//

const sortArr = function (arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  const sort = newArr.sort((a, b) => a - b);
  return sort;
};

console.log(sortArr([12, 76, 23, 97, 33], [5, 3, 7, 2, 9, 1]));
