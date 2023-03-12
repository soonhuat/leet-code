/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const result = []
    arr2.forEach((item) => {
        let index = -1
        do {
            index = arr1.indexOf(item)
            if (index != -1) {
                result.push(item)
                arr1.splice(index, 1)
            }
        } while (index != -1)
    })
    return [
        ...result,
        ...arr1.sort(function (a, b) {
        if (a > b) return 1
        if (a < b) return -1
            return 0
        })
    ]
};