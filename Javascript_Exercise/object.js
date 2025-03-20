const person = {
    name: "Sachin",
    age: 22,
    greet: function(){
        console.log(`hello my name is ${this.name}`);
        
    }

}

// Using Object.keys()
console.log(Object.keys(person)); // Output: ['name', 'age', 'greet']

// Using Object.values()
console.log(Object.values(person)); // Output: ['John', 30, [Function: greet]]

// Using Object.entries()
console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 30], ['greet', [Function: greet]]]

// Using Object.assign()
const newPerson = Object.assign({}, person, { city: 'New York' });
console.log(newPerson); // Output: { name: 'John', age: 30, greet: [Function: greet], city: 'New York' }

//Object.hasOwnProperty
const person2 = { name: 'John' };
console.log(person.hasOwnProperty('name')); // Output: true
console.log(person.hasOwnProperty('age')); // Output: false


//using new keyword

const person1 = new Object()
person.name = "Virat Kohali"
person.age = 37
person.greet = function(){
    console.log(`hello my name is ${this.name}`);
}

console.log(person.name)



// object with method

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2