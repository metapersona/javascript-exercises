# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```
//initialize a new empty array
let newArray = [];
//repeat for each element of array
for (i = 0; i < array.length; i++) {
    array[i].pop();
    if (array[i] = args) {
        console.log(args);
    } else {
        newArray[i].push;
    }
}


//take first element of array
    //if = num dont add
    //else add into the new array



## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  