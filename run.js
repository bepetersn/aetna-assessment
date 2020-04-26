#!/usr/bin/env node

const mergeSortedArrays = require('./src/mergeSortedArrays.js')

const arraysRegex = new RegExp([
  '(\\[.*?\\])',     // - captured, 1st array, brackets + 
                     //   non-validated contents  
  ' ',               //   arrays must be separated by a space  
  '(\\[.*?\\])'      // - 2nd array
].join(''))

function parseArgs(rawArgs) {
  // Treat all arguments as one, so we can 
  // supersede shell's word-splitting with 
  // our own regex for grouping arrays
  let argString = rawArgs.join(' ')
  result = argString.match(arraysRegex)
  if(result) {
    return [
      JSON.parse(result[1]),
      JSON.parse(result[2])
    ]
  }
}

if (require.main === module) {
  (() => {
    let rawArgs = process.argv.slice(2)
    let args = parseArgs(rawArgs)
    if(args.length < 2) {
      console.log("Please pass 2 sorted arrays as arguments")
      process.exit(1)
    } else {
      let result = mergeSortedArrays(...args)
      console.log(`[${result.join(', ')}]`)
    }
  })()
}