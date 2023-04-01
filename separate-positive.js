// add whatever parameters you deem necessary
// return nArr
function separatePositive(nArr) {
    let switchIndex = 0;
    for (let i = 1; i < nArr.length; i++) {
        if (nArr[i] >= 0 && nArr[switchIndex] < 0) {
            const temp = nArr[i];
            nArr[i] = nArr[switchIndex];
            nArr[switchIndex] = temp;
            switchIndex += 1
        } else if(nArr[i] < 0 && nArr[switchIndex] >= 0) {
            switchIndex = i;
        }
    }

    return nArr;
}
