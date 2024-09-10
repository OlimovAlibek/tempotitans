function countingSort(arr) {
    let fArray = Array(100).fill(0)
    fArray.length = 100
 
  for (let i = 0; i < arr.length; i++) {
     fArray[arr[i]] = fArray[arr[i]] + 1
    
    
  }
  return fArray
  
  

}

countingSort([1,1,3,2,1])


var moveZeroes = function(nums) {
    let nonZeroIndex = 0;  // Tracks where to place the next non-zero element
    
    // First, move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    
    // Now fill the remaining part of the array with 0s
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
