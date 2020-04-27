
# aetna-devsecops-bep

### Running the program

    ./run.js [1, 3] [2, 4, 6]  # an example call

### Building & running with docker

    docker build . -t aetna-devsecops-bep:1.0.0
    docker run aetna-devsecops-bep:1.0.0 [1, 2, 5, 110] [-1e+21, -1, 1]  
    # another, also valid, function call

### Tests

There are a few test cases in `tests/` which verify the integrity 
of the `mergeSortedArrays` function itself.

    yarn test

### Notes

`run.js` contains several functions which relate to parsing its
received arguments into arrays. I felt implementing this functionality
was merited in part because the specification requested that this program 
accept a non-quoted format of arrays (which bash does not). 
    
Additionally, there is validation logic for the array format itself in 
`run.js`. Validating the array contents seemed like a smart thing to do 
to mitigate uncertainty in terms of the program's runtime behavior.

Hopefully, this pre-processing doesn't contradict the exercise requirements where 
you said that "the function [itself] should be invoked from command line".

