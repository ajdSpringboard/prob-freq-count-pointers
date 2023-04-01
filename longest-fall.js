// add whatever parameters you deem necessary
function longestFall(arr) {
    let longest = 0;
    let current = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] < arr[i - 1]) {
        current++;
      } else {
        longest = Math.max(longest, current);
        current = 1;
      }
    }
    
    return Math.max(longest, current);
  }
  
