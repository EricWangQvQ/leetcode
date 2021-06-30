// 找到第k大的数  用二分法是二分k而不是数组；
function getKthElement(nums1: number[], nums2: number[], kth: number): number {
    let length1 = nums1.length, length2 = nums2.length;
    let k = kth;
    // 每个数组出k的一半个数 小的一半直接被排除；
    let index1 = Math.min(parseInt(k / 2 + ''), length1) - 1;
    let index2 = Math.min(parseInt(k / 2 + ''), length2) - 1;
    // 记录每个数组已被排除的个数；
    let checked1 = 0, checked2 = 0;
    while (true) {
        if (checked1 >= length1) {
            // 数组1已被全部排除  直接取数组2的对应值；
            return nums2[checked2 + k - 1];
        }
        if (checked2 >= length2) {
            // 数组2已被全部排除  直接取数组1的对应值；
            return nums1[checked1 + k - 1];
        }
        if (k === 1) {
            // 需要排除后的第一大的值 直接比较；
            return Math.min(nums1[checked1], nums2[checked2]);
        }

        if (nums1[index1] <= nums2[index2]) {
            // 减去本次排除的数量
            k -= (index1 + 1 - checked1);
            // 赋值排除数量
            checked1 = index1 + 1;
            // 新的位置1
            index1 += parseInt(k / 2 + '');
            // 新的位置2
            index2 = checked2 + Math.min(parseInt(k / 2 + ''), length2) - 1;
        } else {
            k -= (index2 + 1 - checked2);
            checked2 = index2 + 1;
            index2 += parseInt(k / 2 + '');
            index1 = checked1 + Math.min(parseInt(k / 2 + ''), length1) - 1;
        }
    }
}

/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number} 中位数
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const length1 = nums1.length, length2 = nums2.length;
    // 奇数
    if ((length1 + length2) & 1) {
        return getKthElement(nums1, nums2, (length1 + length2 + 1) / 2);
    }
    // 偶数
    const index = (length1 + length2) / 2;
    
    return (getKthElement(nums1, nums2, index) + getKthElement(nums1, nums2, index + 1)) / 2;
};


console.log(findMedianSortedArrays([1, 2], [3, 4]));

