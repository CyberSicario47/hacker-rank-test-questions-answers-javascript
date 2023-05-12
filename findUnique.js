//Given an array of integers, where all elements but one occur twice, find the unique element. 
 const a = [1,2,3,4,1,2,3,1]
// The unique element is .4

function lonelyinteger(a) {
    const frequencyMap = new Map()
    let returnValue = 0
    for (const element of a) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
   for (const element of a) {
       
       console.log({map:frequencyMap.get(element),element,bool:frequencyMap.get(element) === 1})
    if( frequencyMap.get(element) === 1 ){
        returnValue = element
    }
  }
  console.log({frequencyMap,a,returnValue})
  return returnValue
    // Write your code here

}

lonelyinteger(a)