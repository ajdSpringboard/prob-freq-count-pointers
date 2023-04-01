// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const complements = new Set();
    let count = 0;
    
    for (let num of arr) {
      if (complements.has(num)) {
        count++;
      }
      complements.add(target - num);
    }
    
    return count;
  }
  
