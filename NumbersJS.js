//let sqrt2 = Math.sqrt(2);       //  If I need the square root of a number I could do this
//let tenSquared = Math(10, 2);   // this is 10 raised to the power of 2

let purchase1, purchase2, purchase3, purchase4;
let total, taxRate, initialPrice;

purchase1 = 2
purchase2 = 5
purchase3 = 3
purchase4 = 9
initialPrice = purchase1 + purchase2 + purchase3 + purchase4
taxRate = (purchase4*= 0.08) + (purchase3*= 0.08) + (purchase2*= 0.08) + (purchase1*= 0.08)
total = initialPrice + taxRate
console.log("Your purchase came out to " + initialPrice + " plus tax " + taxRate + " for a total of " + total)
