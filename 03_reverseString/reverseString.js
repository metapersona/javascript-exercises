const reverseString = function(string) {
        let reversedString = [];
        for (i = 1; i < string.length + 1; i++) {
            reversedString.push(string.slice(string.length - i, string.length - (i - 1)));
            console.log(reversedString);
        }
        string = reversedString.join("");
        return string;
};

// Do not edit below this line

module.exports = reverseString;



