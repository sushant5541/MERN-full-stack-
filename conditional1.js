let currentAge = 13;
let age;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    age = 18-currentAge;
    console.log("You are not eligible to vote yet.\nNow your age is: " +currentAge+ " And you have to need more " +age + " years to vote.");
}