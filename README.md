
# aetna-devsecops-bep

### Running the program

    ./run.js [1, 3] [2, 4, 6]

### Building & running with docker

    docker build . -t devsecops-bep:1.0.0
    docker run aetna-devsecops-bep:1.0.0 [1, 2, 5, 110] [-1e+21, -1, 1]

### Tests

    There are a few test cases in `tests/` which verify the integrity 
    of the `mergeSortedArrays` function itself.

### Notes

    `run.js` contains several functions which relate to parsing its
    received arguments into arrays. I felt implementing this functionality
    was merited in part because the specification requested that this program 
    accept a non-quoted format of arrays (which bash does not). Additionally, 
    there is validation logic for the array format itself in `run.js`.
    It's not clear to me if `JSON.parse` or other essential functionality 
    for parsing the arrays might be susceptible to attacks (I found that 
    some people suggest related libraries might be), so validating the 
    array contents seemed like a small thing to do to mitigate risk. 

