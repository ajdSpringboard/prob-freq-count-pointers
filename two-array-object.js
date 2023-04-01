// add whatever parameters you deem necessary
// returns obj
function twoArrayObject(keys, values) {
    const taObj = {}
    for (let i = 0; i < keys.length; i++) {
        taObj[keys[i]] = values[i] || null
    }

    return taObj;
}
