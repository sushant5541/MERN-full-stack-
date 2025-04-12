let marks = 35;
let grade;

if (marks>=80 && marks<=100){
    grade = "Distinction";
    console.log(grade);
} else if (marks>=60 && marks<=79){
    grade = "First class";
    console.log(grade);
} else if (marks>=50 && marks<=59){
    grade = "Second class";
    console.log(grade);
} else if (marks>=35&& marks<=49){
    grade = "Pass";
    console.log(grade);
} else if (marks>=0 && marks<=34){
    grade = "Fail";
    console.log(grade);
} else {
    grade = "Please Enter Valid marks";
    console.log(grade);
}



