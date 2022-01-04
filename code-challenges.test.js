// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// f(x) = (n2+n1)
// create a function that takes in a number and returns an array
// number will represent the number of indexes populated with the above equation.
// n_2 + n_1 = f(n)
// use a for loop, where the example inputs = index
// iterate over the function and push() the value into array

// a) Create a test with expect statements for each of the variables provided.
// a describe method that lists the name of the function OR naming of the particular test.
describe("fibonacci", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("Takes in a number that represents the length of an array, and returns an array following the fibonacci sequence of that array size", () => {
        // Example input: 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        
        // Example input: 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })



// b) Create the function that makes the test pass.

const fibonacci = (arraySize) => {
    const fibArr = [1, 1]

    for (let index = 0; index < arraySize - 2; index++) {
        fibArr.push((fibArr[index] + fibArr[index + 1]))        
    }
    return fibArr
}


// console.log(fibonacci(5));

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// create function using .filter, and method typeOf
// if value at index i; typeOf === "number" push into a new Arr
// create another function that takes in the returned array, and checks to see if number is odd
// if arr[i] % 2 === 1 || arr[i] % 2 === -1 return it to the new array
// return that array with .sort() function
// sort function only sorts using first index of whatever you are looking at 30 > 400000 because 3 > 4
// need to use .sort(function(a, b){return a-b})

// a) Create a test with expect statements for each of the variables provided.

describe("arrFiltSort", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("Takes in a number that represents the length of an array, and returns an array following the fibonacci sequence of that array size", () => {

        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        
        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(arrFiltSort(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(arrFiltSort(fullArr2)).toEqual([-823, 7, 23])
    })
  })



// b) Create the function that makes the test pass.

const arrFiltSort = (array) => {
    return array.filter(value => (value % 2 === 1 || value % 2 === -1) && typeof value === "number").sort(function(a,b){return a-b})
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("addNum", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("Takes in a number that represents the length of an array, and returns an array following the fibonacci sequence of that array size", () => {


  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(arrFiltSort(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(arrFiltSort(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(arrFiltSort(numbersToAdd3)).toEqual([])
    })
  })

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
// going to reuse almost all of my fibonacci sequence code
// numbers are the same, except do not provide a starting array
// i lied, its not the same
// need to store first index of array as newArr[0] = array[0]
// need to add first index of newArr to next number in array


const addNum = array.map(value => newArr[i] + array[i +1])

const addNum = (array) => {
    let newArr = []
    if (array !== []){
        newArr = [array[0]]
        for (let i = 0; i < array.length - 1; i++) {
            newArr.push(newArr[i] + array[i + 1])
        }
    } else{
        return array
    }
    return newArr
}
// console.log(numbersToAdd3)
// console.log(addNum(numbersToAdd3))