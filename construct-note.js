// add whatever parameters you deem necessary
// return bool
function constructNote(message, letters) {
    if (message.length < 1) return true;
    if (letters.length < 1) return false;
  
    const freq = {};
  
    for (let i = 0; i < message.length; i++) {
      const c = message.charAt(i);
      freq[c] = (freq[c] || 0) + 1;
    }
  
    for (let i = 0; i < letters.length; i++) {
      const c = letters.charAt(i);
      if (freq[c]) {
        freq[c] -= 1;
      }
    }
  
    return Object.values(freq).every(count => count <= 0);
  }
  