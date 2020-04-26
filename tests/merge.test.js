
const merge = require('../src/mergeSortedArrays.js')

describe('Merge sorted arrays', () => {

  test('Sorts and merges interleaving arrays', () => {
    let arr1 = [1, 2, 7, 9]
    let arr2 = [3, 6, 8]
    let expected = [1, 2, 3, 6, 7, 8, 9]
    let received = merge(arr1, arr2)
    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
  
  })
  
  test('Sorts and merges arrays with first bigger element in first arr', () => {
    let arr1 = [6, 8, 9]
    let arr2 = [1, 4, 6]
    let expected = [1, 4, 6, 6, 8, 9]
    let received = merge(arr1, arr2)
    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
  })
  
  test('Can "merge" one array with an empty array correctly', () => {
    let arr1 = []
    let arr2 = [1, 2, 3]
    let expected = [1, 2, 3]
    let received = merge(arr1, arr2)
    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
  })

})
