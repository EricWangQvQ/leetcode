function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    let result = '';
    for(let x = 0; x < numRows; x++) {
        let index = x;
        while(s[index]) {
            result += s[index];
            if (x !== 0 && x !== numRows - 1) {
                const index2 = index + 2 * numRows - 2 * x - 2;
                result += (s[index2] || '');
            }
            index += 2 * numRows - 2;
        }
    }

    return result;
};

console.log(convert('PAYPALISHIRING', 3));
