// ## Practice problem #1
// sort descending
// let arr = ['10', '11', '9', '7', '8'];

// let sortedArr = arr.sort((a,b) =>Number(b) - Number(a));
// console.log(sortedArr);

// //## Practice Problem 2
// //sort ascending based on publication year

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// let sortedBooks = Object.values(books).sort((a,b) => Number(a.published) - Number(b.published));
// console.log(sortedBooks);


// ## Practice Problem 3
// How do you access the letter 'g' in each instance
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr1G = arr1[2][1][3]

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr2G = arr2[1]['third'][0]

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let arr3G = arr3[2]['third'][0].split('')[0]
// arr3G = arr3[2]['third'][0][0]

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj1G = Object.values(obj1)[1][1]
// obj1G = obj1['b'][1]

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

// let obj2G = Object.keys(Object.values(obj2)[2]);
// obj2G = Object.keys(obj2.third)[0]

// console.log(obj2G)

// Practice Problem 4
// increment the value 3 to 4 in all of the below
// let arr1 = [1, [2, 3], 4];

// let newArr1 = arr1[1][1] + 1

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// let newArr2 = arr2[2] +1


// let obj1 = { first: [1, 2, [3]] };

// let newObj1 = Object.values(obj1)[0][2][0] + 1


// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

// let newObj2 = Object.values(Object.values(obj2)[0])[0][2] + 1
// console.log(newObj2)

//Note can also use simple reassignment =4 instead of creating a new variable


 // ## Practice Problem 5
// let munsters = {
//     Herman: { age: 32, gender: 'male' },
//     Lily: { age: 30, gender: 'female' },
//     Grandpa: { age: 402, gender: 'male' },
//     Eddie: { age: 10, gender: 'male' },
//     Marilyn: { age: 23, gender: 'female'}
//   };

// let ageSum = Object.values(munsters)
//                     .filter(elem1 => elem1.gender === 'male')
//                     .reduce((acc, elem1) => (Number(acc) + Number(elem1.age)),0);
// console.log(ageSum);

// ## Practice Problem 6
//output: (Name) is a (age)-year-old (male or female).

// let outputString = Object.entries(munsters).forEach(elem1 => {
//     let munsterName = elem1[0];
//     let munsterAge = elem1[1]['age'];
//     let munsterGender = elem1[1]['gender'];
//     return console.log(`${munsterName} is a ${munsterAge}-year-old ${munsterGender}`);
// });
// console.log(outputString);

// ## Practice Problem 8
// // using forEach, output all vowels from the strings in the arrays
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// // Input: Object
// Output: String
// High Level Data conversion: object -> array (Object.entries) -> string (split)
// Procedure:
// 1) Set constants of vowels 
// 2) Convert obj into a nested Array with two elements per subarray
// 3) forEach subarray and forEach element of the respective subarray:
// 4) split the subarrays by character
// 5) log all chars that are vowels

// const vowels = 'aeiou'

// let objValues = Object.values(obj);
// objValues.forEach(arr => {
//   arr.forEach(word => {
//       word.split('').forEach(char => {
//         if(vowels.includes(char)) {
//           console.log(char);
//         };
//       });
//   });
// });

// ## Practice Problem 9
// return a new array with the same structure but ordered in ascending order (alphanumeric as approriate)
// want a new array, require map
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// let newArr =arr.map(subarr => {
//       if (typeof(subarr[0]) === "number") {
//        return subarr.slice().sort((a,b) => a-b);
//       } else {
//         return subarr.slice().sort()
//       };
//     });

// console.log(newArr)

// ## Practice Problem 10
// Sort in descending order (same  as #9)

// let newArr2 =arr.map(subArr => {
//   return subArr.slice().sort((a, b) => {
//     if (typeof a === 'number') {
//       return b - a;
//     }

//     if (a < b) {
//       return 1
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });

// // => [ [ 'c', 'b', 'a' ], [ 3, 2, 1 ], [ 'green', 'blue', 'black' ] ]

// console.log(newArr2)

// Practice Problem #11
// use map to return a new array with each value incremented + 1
// do not modify the new structure

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let newArr = arr.map(obj => {
//   let newObj = {}
//   for (let prop in obj){
//    newObj[prop] = obj[prop] + 1;
//   }
//   return newObj
// });

// console.log(newArr)
// console.log(arr);

// Practice Problem #12
// filter to return a new array only with numbers that are multiples of 3
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let newArr = arr.map(subArr => {
//   return subArr.filter(element => element % 3 === 0)
// });

// console.log(newArr);

// ## Practice Problem 13
// sort ascending the array so that the sub-arrays are ordered based on the sum of the odd numbers they contain
// 1) filter out even numbers
// 2) sum each subarray
// 3) compare each subarray
// return same array
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// arr.sort((a,b) => {
//     let oddSumA = a.filter(element => element % 2 === 1)
//                    .reduce((acc, ele) => acc + ele,0);
//     let oddSumB = b.filter(element => element % 2 === 1)
//                 .reduce((acc, ele) => acc + ele,0);

//     return oddSumA - oddSumB;
// });

// console.log(arr);

//output: [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// ## Practice Problem 14

// Given the following data structure write some code to return an array 
//containing the colors of the fruits and the sizes of the vegetables. 
// The sizes should be uppercase, and the colors should be capitalized.
/*
1)Conditional logic to capitalize first letter of colors and full capitalization of sizes
2)Push fruit colors and veggie sizes into new object array
*/
//output: [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
//

// let obj1 = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// let capitalize = (word) => word[0].toUpperCase() + word.slice(1)
// let newObj = Object.values(obj1);
// let mappedObj = newObj.map(subObj => {
//     if (subObj.type === 'fruit'){
//       return subObj.colors.map(char => capitalize(char));
//     } else {
//       return subObj.size.toUpperCase();
//     };
//  }
// );
// console.log(mappedObj)

// ## Practice Problem 15
// return an array which contains only the objects where all the numbers are even
/* Will require filter reduce based on inclusion of value % 2 ===1 or sum of all values 
Code path:
input: array of objects
output: array of objects
map object, if every of the values of the object are even, return - else do not return
*/

let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr15 = arr15.filter(subObj => {
  return Object.values(subObj).every(subArr => {
    return subArr.every(num => num % 2 === 0)
  });
});


// console.log(newArr15);


// ## Practice Problem 16
// returns an object where the key is the first item in each subarray,
// and the value is the second.
/*
input: nested array
output: object
map first element as key, property as second element
// */
// let arr16 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// let newObj = {}
// arr16.forEach(subArr => {
//     let key=subArr[0];
//     let value =subArr[1];
//     newObj[key]=value;
// });
// arr16
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


// ## Practice Problem 17
// Write a function that takes no parameters and returns a UUID.
// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
// The value is typically broken into 5 sections in an 8-4-4-4-12 pattern


// let uuidCreator = () => {
//   const uuidCharacters = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
//   const sections = [8,4,4,4,12];
//   let uuidOutput ='';
//   let randomIndex = () =>  Math.floor(Math.random() * uuidCharacters.length);
//   sections.forEach(section,sectionIndex => {
//     for (let index = 1; index <=sections; index ++){
//       uuidOutput += uuidCharacters[randomIndex]
//     };
//     if (sectionIndex< sections.length -1){
//       uuidOutput += '-'
//     };
//   });
//   return uuidOutput;


// };  
// uuidCreator();

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
  console.log(uuid);
}

console.log(generateUUID()); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'