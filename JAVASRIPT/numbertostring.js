
var digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
        // Increment the current digit by 1
        digits[i]++;
        
        // If the result is 10, carry over 1 to the next digit
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            // If it's not 10, no need to carry over, we're done
            return digits;
        }
    }
    
    // If we reach this point, it means we had a carry-over all the way to the leftmost digit
    // In this case, we need to add a new digit "1" at the beginning of the array
    digits.unshift(1);
    
    return digits;