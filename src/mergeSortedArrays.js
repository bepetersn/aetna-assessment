
/**
 * Given two sorted arrays, return a new sorted array 
 * with each element from arr1 and arr2. 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]} A new sorted array with all elements 
 *                    from arr1 and arr2.
 */
function mergeSortedArrays(arr1, arr2) {
    
    let index1 = 0
    let index2 = 0
    let newArr = []
    while((index1 < arr1.length) && (index2 < arr2.length)) {
        let numOfArr1 = arr1[index1]
        let numOfArr2 = arr2[index2]
        if(numOfArr1 <= numOfArr2) {
            newArr.push(numOfArr1)
            index1++
        } else {
            newArr.push(numOfArr2)
            index2++
        }
    }
    while(index1 < arr1.length) {
        newArr.push(arr1[index1])
        index1++
    }
    while(index2 < arr2.length) {
        newArr.push(arr2[index2])
        index2++
    }
    return newArr
}

module.exports = mergeSortedArrays
