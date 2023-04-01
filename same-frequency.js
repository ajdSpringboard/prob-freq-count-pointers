// add whatever parameters you deem necessary
// return bool
function sameFrequency(x, y) {
    const xStr = x.toString();
    const yStr = y.toString();
  
    if (xStr.length !== yStr.length) return false;
  
    const freq = {};
  
    for (let i = 0; i < xStr.length; i++) {
      const digit = xStr.charAt(i);
      freq[digit] = (freq[digit] || 0) + 1;
    }
  
    for (let i = 0; i < yStr.length; i++) {
      const digit = yStr.charAt(i);
      if (!freq[digit]) {
        return false;
      }
      freq[digit] -= 1;
    }
  
    return true;
  }
  
