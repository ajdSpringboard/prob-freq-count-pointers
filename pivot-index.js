// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let totalSum = 0;
    let leftSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (leftSum === totalSum - leftSum - arr[i]) {
        return i;
      }
      leftSum += arr[i];
    }
    
    return -1;
  }
  
