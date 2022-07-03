//https://leetcode.cn/problems/merge-sorted-array/
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let m = 3, n = 3
var merge = function(nums1, m, nums2, n) {
  for(let i = m + n - 1; i >= 0; i--){
      if( n - 1 < 0) return nums1
      if(nums1[m - 1] > nums2[n - 1] ){
          nums1[i] = nums1[m - 1]
          m--
      }else{
          nums1[i] = nums2[n - 1]
          n--
      }
  }
};
console.log( merge(nums1,m,nums2,n))