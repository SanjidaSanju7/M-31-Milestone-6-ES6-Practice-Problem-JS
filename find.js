// 3) Now do the same task of question 2.
//  But do this using array.find() method.
//  Then compare the output of question 2 & question 3.

const numbers = [33, 50, 79, 78, 90, 101, 30];

const newReturnedArray = numbers.filter(number => number % 2 == 0);

console.log(newReturnedArray)