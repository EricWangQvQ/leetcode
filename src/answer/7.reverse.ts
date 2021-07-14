function reverse(x: number): number {
    const s = x + '';
    let index = 0, result = '';
    if (x < 0) {
        index = 1;
        result += '-';
    }
    for (let i = s.length - 1; i >= index; i--) {
        result += s[i];
    }
    index = +result;
    if (index < -(2**31) || index >= 2**31) {
        return 0;
    }
    return index;
};

console.log(reverse(1534236469));
