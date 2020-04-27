#!/usr/bin/env node

const mergeSortedArrays = require('./src/mergeSortedArrays.js')
const assert = require('assert')


const arraysRegex = new RegExp([
  '(\\[.*?\\])',     // - 1st array, brackets + 
                     //   non-validated contents  
  ' ',               //   arrays must be separated by a space  
  '(\\[.*?\\])'      // - 2nd array
].join(''))


function parseArrays(argString) {
  /* Expect two space-separated arguments 
     that are bounded by array brackets,
     whose contents look like numbers */

  let stringArrays = argString.match(arraysRegex)
  if(stringArrays) {
    try {
      // get regex groups (arrays) 1 and 2,
      // then validate contents
      return stringArrays.slice(1, 3).map(parseArray)
    } catch (error) {
      return null
    }
  }
}

function parseArray(stringArray) {
  /* Validate contents of array is 
     only comma-separated numbers
     before parsing as JSON. */
  stringArray
    .replace('[', '').replace(']', '')
    // Below: Empty array contents split to empty string ''
    .split(',').filter(ele => ele !== '')
    .map(ele => parseInt(ele))
    .map(ele => assert.strictEqual(
        !isNaN(ele), true, 
        'One of these arrays contains a non-numeric value'))
  
  return JSON.parse(stringArray)
}

function formatArray(arr) {
  return `[${arr.join(', ')}]`
}

if (require.main === module) {
  /* Treat all arguments as one, so we can 
     supersede the shell's word-splitting with 
     our own regex for grouping arrays. 
     Validate array contents after grouping. */
  let rawArgs = process.argv.slice(2)
  let argString = rawArgs.join(' ')
  let arrays = parseArrays(argString)
  if(!arrays) {
    console.log("Please provide two well-formatted arrays of numbers")
    process.exit(1)
  } else {
    let mergedArray = mergeSortedArrays(...arrays)
    console.log(formatArray(mergedArray))
  }
}