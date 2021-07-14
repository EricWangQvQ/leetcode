function maxArea(height: number[]): number {
    let result = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        if (height[i] < height[j]) {
            result = Math.max(height[i] * (j - i), result);
            i++;
        } else {
            result = Math.max(height[j] * (j - i), result);
            j--;
        }
    }
    return result;
};