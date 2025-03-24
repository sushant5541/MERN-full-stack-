// Question 10: Write a function to flatten a nested array.
// Description: - Use recursion to flatten each nested array element.

function flattenarray(nestedArray){

   const flattenedarray = []

   for(const element of nestedArray){
    if(Array.isArray(element)){
        flattenedarray.push(...flattenarray(element))
    }
    else{
        flattenedarray.push(element)
    }
   }
   return flattenedarray
}

const nestedArray = [1, [2, [3, 4]], 5, [6, 7]];

console.log(flattenarray(nestedArray));
