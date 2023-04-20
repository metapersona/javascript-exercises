const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (!(start > 0) || !(end > 0)) return "ERROR"
    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    let bank = 0;
    for (i = start; i < end + 1; i++){
        bank += i;
    }
    return bank;
};

// Do not edit below this line
module.exports = sumAll;
