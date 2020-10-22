let givenString = "We hold these truths to be self-evident, taht all men are created equal, " +
    "taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life," +
    " Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men," +
    " deriving their just powers from the consent of the governed."
let foundGOV = givenString.indexOf("Governments")
console.log(foundGOV)
let firstComa = givenString.indexOf(",")
let nextComa = givenString.indexOf(",",firstComa+1)
let subStr = givenString.substring(46,72)
console.log(subStr)
let correction = givenString.replace("taht" , "that")
console.log(correction)
console.log(givenString.length)