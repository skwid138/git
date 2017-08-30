console.log('script.js sourced');

//Eliminate All Odd Numbers Within An Array
// Return all valid numbers (even) in the order they were given.

var allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 111, 112, 138];

function sortEven( arr ) {
    var evenNumbers= [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            console.log('arr[i] ->', i);
            evenNumbers.push(arr[i]);
        } 
    }
    return evenNumbers;
}

console.log(sortEven(allNumbers));

// Capitalize The First Letter Of Each Word
// Create a function that takes a string as an argument and converts the first
// character of each word to uppercase. Return the newly formatted string.

var aString = 'hunter is learning javascript at prime!';
var anotherString = 'Every other Word is Capitalized'

function capitalize( str ) {
    var arr = str.split(' '); // splits string into an array of words
    console.log('arr ->',arr); // logs the new array
    var capStr = ''; // variable for new string of capitalized words
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); // caps the first letter of each string in the array
        console.log('arr in loop ->', arr);
        // capStr += arr[i] ; //adds cap words from array back into the string
    } // end for
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i] + ' '; // adds a space to all words except the last
        console.log('arr in 2nd loop ->', arr);
    } // end 2nd for
    for (var i = 0; i < arr.length; i++) {
        capStr += arr[i]; //adds cap words from array back into the string
    }
    return capStr; // returns string with all words capitalized
} // end capitalize

console.log(capitalize(aString));
console.log(capitalize(anotherString));