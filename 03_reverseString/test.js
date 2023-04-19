let test = "dog";

reverseString(test);

function reverseString(string){
    let reversedString = [];
    console.log(string);

    for (i = 1; i < string.length + 1; i++) {
        reversedString.push(string.slice(string.length - i, string.length - (i - 1)));
        console.log(reversedString);
    }
    string = reversedString.join("");
    console.log(string);
    }

//https://developer.chrome.com/docs/devtools/javascript/snippets/#open