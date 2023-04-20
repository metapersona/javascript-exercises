//...args uses an array of items [2,4, etc]

const removeFromArray = function(array, ...args) {
    //initialize a new empty array
    const newArray = [];
//repeat for each element of array and all items in args array
    for (i = 0; i < array.length; i++) {
        let x = array[i];
        if (!args.includes(x)) {
            newArray.push(x);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


//