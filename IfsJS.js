if (porridgeTemp > 100)  {       // is porridge too hot?
    // add milk to porridge
}
else {
    if (porridgeTemp < 70) {     // porridge is too cold
        // put porridge back in the microwave
    }
    else  {                                 // porridge is just right
        // eat the porridge
    }
}




//There is a difference between = and == and ===.

//a single = is for assignment. The value on the left of the = is assigned the value calculated on the right hand side.
    //a double == is for comparison. JavaScript knows that frequently you get data from a web page. That data comes to you often as a string. JavaScript knows that you may be using it as a number. So it says I will do you a favor. If you are comparing a string value (say for instance "99") to a number 99, then JavaScript will say that's OK, I get what you are doing and it will evaluate that as true.
let orderCount = '99';
if (orderCount == 99)   // this will evaluate to TRUE
    //a triple === is for comparing value and TYPE. Both must match to be true.
'99' == 99      // this evaluates to true. JavaScript says that they are equal. The value '99' is coerced into a number.
'99' === 99   //  is evaluates to false. JavaScript does not do any coercion




//The comparison operators are
//==      equal -- are the values the same. If they are numbers and strings being compared, the string will be coerced into a number and tested
//===    identical -- are the values AND they type the same? No coercion. '99' is not equal to 99
//!=       not equal -- are the values different
// >, <, >=, <= greater than, less than, greater than OR equal, and lastly less than OR equal
// The comparison will either evaluate to true or false.
//     If it evaluates to true the block of code after the if is executed.
//     if it evaluates to false the block of code associated with the else is executed (if there is one)
// The if statement can be complex. It can test for several different conditions


let testScores = [
    {'student': "Adam",     'score':91},       {'student': "Ben",      'score':80},
    {'student': "Cecil",    'score':31},       {'student': "Deb",      'score':86},
    {'student': "Eve",      'score':100},      {'student': "Frank",    'score':75},
    {'student': "Gene",     'score':43},       {'student': "Hank",     'score':67},
    {'student': "Iris",     'score':98},       {'student': "Jerrie",   'score':12},
    {'student': "Ken",      'score':100},      {'student': "Lou",      'score':100},
    {'student': "Mary",     'score':49}
];

// find students with passing grades for (let i = 0; i < testScores.length; i++) {
if (testScores[i].score > 60) {
    console.log("Found Students with 'passing' grade! " + testScores[i].student );
}


for (let i = 0; i < testScores.length; i++) {
    if (testScores[i].score >= 70) {
        if (testScores[i].score < 80) {
            console.log("Found Student! " + testScores[i].student );
        }
    }
}

for (i = 0; i < testScores.length; i++) {
    if ( testScores[i].score > 60          && testScores[i].score < 70 &&
        (testScores[i].student.length == 3 || testScores[i].student.length == 5)  ) {
        console.log("Found Student! " + testScores[i].student );
    }
}


let date = new Date();
let hour = date.getHours();

console.log(date);
console.log(hour);

if (hour >= 23 || hour < 4) {
    console.log(`Derek is sleeping`);
} else if (hour == 4) {
    console.log(`Derek is making breakfast`);
} else if (hour == 5 || hour <= 7) {
    console.log(`Derek is studying`);
} else if (hour >= 8 && hour <= 13) {
    console.log(`Derek is learning from Edge Tech instructors`);
} else if (hour > 13 && hour < 16) {
    console.log(`Derek is doing school work with son`);
} else if (hour > 17 && hour < 20) {
    console.log(`Derek is relaxing`);
} else {
    console.log(`Derek is doing what he does`);
}