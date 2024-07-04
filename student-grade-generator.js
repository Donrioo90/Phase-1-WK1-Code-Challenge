let studentScore = 110; //You can change the score to validate the code.
let studentName = 'Ronnie';  // Student's name.

    //Used 'if' and 'else if' conditional statements.
if (studentScore >79) {
    console.log (`Congratulations, ${studentName}, you scored ${studentScore}. You got an A on this test.`);
} else if (studentScore >= 60 && studentScore < 79) {
    console.log (`Congratulations, ${studentName}, you scored ${studentScore}. You got an B on this test.`);
}
else if (studentScore >= 49 && studentScore < 59) {
    console.log(`Congratulations, ${studentName}, you scored ${studentScore}. You got a C on this test.`);
}
else if (studentScore >=40 && studentScore < 49){
console.log(`hi, ${studentName}, you scored ${studentScore}. You got a D on this test.`);
}
else if (studentScore < 40){
   console.log(`hi, ${studentName}, you scored ${studentScore}. You got an E on this test.`);
   }

