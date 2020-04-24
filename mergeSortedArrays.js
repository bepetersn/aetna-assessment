
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let numOfArr2
    let numOfArr1
    let nextNumOfArr1
    let biggerThanPrev
    let smallerThanNext
    let nextIsZero
    let nextIsNotSet
    let preservesCorrectSort
    let deleteContext = { deleteCount: 1 }
    let deleteCount = 0
    (for numOfArr2 of nums2) {
        
        for(let i=0; i<nums1.length; i++) {
            
            // if we can establish it preserves the correct sort,
            numOfArr1 = nums[i]
            nextNumOfArr1 = nums[i+1]
            biggerThanPrev = numOfArr1 <= numOfArr2
            smallerThanNext = numOfArr2 <= nextNumOfArr1
            preservesCorrectSort = biggerThanPrev && smallerThanNext
            nextIsZero = nextNumOfArr1 === 0
            nextIsNotSet = nextNumOfArr1 === undefined
            if(preservesCorrectSort || nextIsNotSet || nextIsZero) {
                
                // insert numOfArr2 at the next position; 
                // also, delete the zero if there is one
                with(deleteContext) {
                  nums1.splice(i+1, deleteCount, numOfArr2)
                }
                break
            }
        }
    }
}