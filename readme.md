# Edabit Problems 

#### Eliminate All Odd Numbers Within An Array
This problem was one I've worked on before. I solved it using the **modulus** operator.
1. A *for* loop runs through each item in the array
1. An *if* statement compares the remainder of the item in the array divided by 2
    * Use *Modulus* to divide the array item by 2 and compare it to 0
1. When the *if* is true it gets pushed into a new array
1. The new array is *return*ed

'<function sortEven( arr ) {
    var evenNumbers= [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            console.log('arr[i] ->', i);
            evenNumbers.push(arr[i]);
        } 
    }
    return evenNumbers;
}>'

#### Capitalize The First Letter Of Each Word