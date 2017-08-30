# Edabit Problems 

#### Eliminate All Odd Numbers Within An Array
This problem was one I've worked on before. I solved it using the **modulus** operator.
1. A *for* loop runs through each item in the array
1. An *if* statement compares the remainder of the item in the array divided by 2
    * Use *Modulus* to divide the array item by 2 and compare it to 0
1. When the *if* is true it gets pushed into a new array
1. The new array is *return*ed

`<function sortEven( arr ) {
    var evenNumbers= [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            console.log('arr[i] ->', i);
            evenNumbers.push(arr[i]);
        } 
    }
    return evenNumbers;
}>`

#### Capitalize The First Letter Of Each Word
This problem was more difficult then the above and I'm certain it could be refactored, but I had issues getting the space back on each word. 

1. The *split* method takes the array apart and saves each word into an array
1. Declared a variable that was an empty string
1. A *for* loop runs through the new array of words
    * *charAt* takes the first character of the string and makes it *toUpperCase*
    * then the first character of the word in the new array is combined with a the same word after the first character is *sliced* off
    * the new capitalized word is then saved back into the array
1. A second *for* loop is ran and adds a space to the end of each string excluding the last string
1. A third *for* loop is run to add all the items of the new array into the new empty string variable
1. The new varaible is then *return*ed