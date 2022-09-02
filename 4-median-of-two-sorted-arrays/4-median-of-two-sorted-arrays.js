/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(arr1, arr2) {
      const res = [];
   let i = 0;
   let j = 0;
   while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
         res.push(arr1[i]);
         i++;
      }else{
         res.push(arr2[j]);
         j++;
      }
   };
   while(i < arr1.length){
      res.push(arr1[i]);
      i++;
   };
   while(j < arr2.length){
      res.push(arr2[j]);
      j++;
   };
      const mid = res.length/2 | 0;

   if (res.length % 2 === 0) return (res[mid] +res[mid - 1])/2;
   else return res[mid];
};