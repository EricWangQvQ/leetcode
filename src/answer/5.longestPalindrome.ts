/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * @param s 
 */

function longestPalindrome(s: string): string {
    const length = s.length;
    if (length <= 0) {
        return '';
    }
    if (length === 1) {
        return s;
    }
    let result = s[0];
    for (let index = 0, length = s.length; index < length; index++) {
        let index1 = index, index2 = index + 1;
        while(s[index1] && s[index2] && s[index1] === s[index2]) {
            const cl = index2 - index1 +1;
            if (cl > result.length) {
                result = s.slice(index1, index2 + 1);
            }
            index1--;
            index2++;
        }
        index1 = index - 1;
        index2 = index + 1;
        while(s[index1] && s[index2] && s[index1] === s[index2]) {
            const cl = index2 - index1 +1;
            if (cl > result.length) {
                result = s.slice(index1, index2 + 1);
            }
            index1--;
            index2++;
        }
    }
    return result;
};

console.log(longestPalindrome('11'));
