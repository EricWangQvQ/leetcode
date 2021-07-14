function isPalindrome(x: number): boolean {
    if (x < 0 || x % 1) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    let i = 1;
    let resultArr = [];
    while(x >= 10**(i - 1)) {
        let cur = 0;
        if (i > 1) {
            cur = ((x - x % (10**(i - 1))) % 10**i / 10**(i - 1));
        } else {
            cur =  x % 10;
        }
        resultArr.unshift(cur);
        i++;
    }
    
    const result = resultArr.reduceRight((result, value, index) => {
        result += value * 10**index;
        return result;
    }, 0);
    return result === x;
};

console.log(isPalindrome(12321));
