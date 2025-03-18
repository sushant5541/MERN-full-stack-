// Question 03: Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names
// Description: - Filter the array of people to get only those who are 18 or older, and then map their names to create an array of names.

function FilterAndMap(people) {
    const adults = people.filter(person => person.age >=18)

    const adultsName = adults.map(person => person.name)

    return adultsName;
}

let people = [{
    name : "Sachin",
    age : 14,
    city : "Mumbai"
},
{
    name : "Soham",
    age : 18,
    city : "nashik"
},
{
    name : "ram",
    age : 20,
    city : "kolhapur"
}
]

console.log(FilterAndMap(people));



// Question 04: Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method.
// Description: - Use the map method to double each element of the array and return the new array.

function doubleArrayElement(arr){
    const doubledArray = arr.map(elements => elements * 2)

    return doubledArray;
}

let array = [2,5,6,7,8,0]
console.log(doubleArrayElement(array))

