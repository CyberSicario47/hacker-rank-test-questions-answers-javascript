// counting the element occurance in the 1st array with respect to the second array in javascript


// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results


const strings = ['ab','ab','abc']
const queries = ['ab','abc','bc']


//output must be an array [2,1,0]


//solution


function matchingStrings(strings, queries) {
    // Write your code here

let finalArray = new Array(queries.length).fill(0)
for(let i = 0;i<queries.length; i++){
    for(let j = 0; j<strings.length; j++){
        if(queries[i]===strings[j]){
            finalArray[i] +=1
        }
    }
}
    return finalArray

}


// the time complexity of this is O(n2)
// to reduce the time complexity we must use dynamic programming 

function matchingStrings(strings, queries) {
    const frequencyMap = new Map();
    const finalArray = [];
  
    // Precompute frequencies of strings
    for (const string of strings) {
      frequencyMap.set(string, (frequencyMap.get(string) || 0) + 1);
    }
  console.log({frequencyMap},'first after computing')
    // Match strings with queries using precomputed frequencies
    for (const query of queries) {
      finalArray.push(frequencyMap.get(query) || 0);
    }
    console.log({finalArray},'final Array computing')

    return finalArray;
  }

  // this decreases thee time complexity to O(n+m)  or O(n)

  matchingStrings(strings,  queries)