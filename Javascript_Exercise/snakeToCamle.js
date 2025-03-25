// Question 26: Write a function to convert a string from snake_case to camelCase.
// Description: - Split the string by underscores, capitalize the first letter of each word after the first one, and then join the words together.

//const snakeCaseStr = "hello_world"; // Example snake_case string
//console.log(snakeToCamel(snakeCaseStr)); // Output: "helloWorld"


function snakeToCamel(str){
    const words = str.spilt('_')

    const camelCase = words.map((word, index) => {
        if(index===0){
            return word
        }
        else{
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }).join('')

    return camelCase
}

