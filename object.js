const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    greet: function(){
        console.log(`hi i am ${this.name} my age ${this.age}`);
    }
}

person.greet(); // hi i am John Doe my age 30