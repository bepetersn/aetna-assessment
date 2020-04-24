
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let numOfArr2
    let nextNumOfArr1
    let biggerThanPrev
    let smallerThanNext
    let nextIsZero
    let nextIsNotSet
    let preservesCorrectSort
    let deleteCount
    for(numOfArr2 of nums2) {
        
        for(let index=0; index<nums1.length; index++) {
            
            nextNumOfArr1 = nums1[index+1]

            // if we can establish it preserves the correct sort,
            biggerThanPrev = nums1[index] <= numOfArr2
            smallerThanNext = numOfArr2 <= nextNumOfArr1
            preservesCorrectSort = biggerThanPrev && smallerThanNext
            nextIsZero = nextNumOfArr1 === 0
            nextIsNotSet = nextNumOfArr1 === undefined
            if(preservesCorrectSort || nextIsNotSet || nextIsZero) {
                
                // insert numOfArr2 at the next position; 
                // also, delete the zero if there is one there
                deleteCount = +nextIsZero
                // TODO: does this delete the right thing when there is a zero?
                nums1.splice(index+1, deleteCount, numOfArr2)
                break
            }
        }
    }
}