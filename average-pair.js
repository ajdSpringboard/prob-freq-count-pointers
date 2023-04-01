// add whatever parameters you deem necessary
// return bool
function averagePair(nArr, target) {
    if(nArr.length <= 1) return false

    const tracker = new Set();
    
    for(let i = 0; i < nArr.length; i++) {
        const matchingNum = 2*target - nArr[i];
        if(tracker.has(matchingNum)) return true;
        tracker.add(nArr[i])
    }

    return false;
}
