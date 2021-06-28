function lengthOfLongestSubstring(s: string): number {
    let targetStr = '';
    let maxLength = 0;
    for (const str of s) {
        const index = targetStr.indexOf(str);
        if (index >= 0) {
            targetStr = targetStr.slice(index + 1);
        }
        targetStr += str;
        maxLength = Math.max(maxLength, targetStr.length);
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring('sas'));
