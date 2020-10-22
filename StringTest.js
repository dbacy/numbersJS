let test = "just a long string of words and characters";
let phrase = 'JavaScript should be learned no matter what your primary programming language is';

let firstName = 'Edge';
let middleName = 'Tech';
let lastName = 'Academy';

let result;
let yesOrNo;
let index;
let chr;


chr = phrase.charAt(25);
console.log('Found >' + chr + '< at position 25');

chr = phrase.charAt(6);
console.log('Found >' + chr + '< at position 6');

chr = phrase.charAt(0);
console.log('Found >' + chr + '< at position 0');

chr = phrase.charAt(phrase.length -1);
console.log('Found >' + chr + '< at position the end');

result = firstName.concat(" " + middleName).concat(" " + lastName)
console.log(result)

yesOrNo = test.includes('just');
console.log('does test include \'just\': ' + yesOrNo);
yesOrNo = test.includes('elephant');
console.log('does test include \'elephant\': ' + yesOrNo);
yesOrNo = test.includes('acters');
console.log('does test include \'acters\': ' + yesOrNo);

index = test.indexOf('z')
index = test.indexOf('s')
index = test.lastIndexOf('s')

let str = '*'
console.log(str.repeat(20))
let str2 = 'Happy Birthdays'
console.log(str2.repeat(2))

// let split = test.split(" ",13)
// console.log(split)
// let split2 = phrase.split(" ",4)
// console.log(split2)

index = test.slice(7,18)
console.log(index)
index = test.substr(7,18)
console.log(index)
index = test.substring(7,18)
console.log(index)
index = test.slice(14)
console.log(index)
index = test.substr(14)
console.log(index)
index = test.substring(14)
console.log(index)

result = test.toUpperCase()
result = test.toLowerCase()
result = phrase.toLowerCase()


