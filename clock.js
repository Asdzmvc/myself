// 'use strict'
// let ism = 'Ulugbek';
// console.log(ism);

// let familiya = 'yulchiyev';
// console.log(familiya);

// let yosh = '18';
// console.log(yosh)

// console.log(yoshi);
// let yoshi = '18';

// let with space = 'withSpace';

// let $startWithNumber = 'startWithNumber';

// let otherSymbolUsed = 'otherSymbolUsed';

// let try = 'reserved word'

// let ages = 18;
// let price = 19.99;
// console.log(ages);
// console.log(price);

// let firstName = 'yulchiyev';
// console.log(firstName)

// let isUser = 'true';
// console.log(isUser)

// let student 
// console.log(student);

// let school = 'null'
// console.log(school);

// let id = symbol('id');
// console.log(id)

// const alsoHuge = BigInt(941250071);
// console.log(alsoHuge);

// let age = '18';
// let firstNames ='Yulchiyev';
// console.log(typeof firstNames);

// let yosh = '18';
// console.log(yosh);
// yosh = '19';
// console.log(yosh);

// let job = 'frontendDeveloper';
// console.log(job)
// let car = 'amg'
// console.log(car)

// const id = 'AAB';
// console.log(id);

// ism = 'asad'; 
// console.log(ism); 

// let a = 5 , b = 10 
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a++);    //(post-increasement)
// console.log(a);
// console.log(++a);  //(pre-increasement)
// console.log(a);
// console.log (b--);  //(post-decreasement)
// console.log(b);
// console.log(--b);  //(post-decrement) 
// let a = 9999999 , b = 9999999 
// console.log(a * b)
// console.log(a % b)
// console.log(a++)
// console.log(a)
// console.log(a * b)
// console.log(a + b)

// Function declaration
// function even0r0ddDec (number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }

// Function expression

// const even0r0ddExp = function (number) {
//     if (number % 2 === 0) {
// } 

// let a = 5, b = 10, c = 5;
// const z = a

// console.log(a == c); //true
// console.log(a === c); //false
// console.log(a == z); //true
// console.log(a === z); //true
// console.log(a != b); //true
// console.log(a != z); //false
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a >= b); //false
// console.log(a <= b); //true

// let a = 5, b = 10, c = 15;

// console.log(a); //5
// a = b
// console.log(a); //10
// a += b
// console.log(a); //20
// a -= b
// console.log(b); //10
// c *= b
// console.log(c); //150
// c /= 5
// console.log(c); //30
// b %= 2
// console.log(b); //0


// let ismi = 'Asad'
// let message= ' salom ' + ismi + ' ! '
// console.log(message)

// let name = 'Asd'
// let message =  `Salom ${name}`;
// console.log(message);

// const cities = ["London", "Manchester", "Cardiff"];
// cities.push('Liverpool');
// console.log(cities);
// const countries = ["Egypt", "Australia"]
// countries.pop ()
// console.log(countries)

// let age = prompt("What is your age?" , 18);
// let welcome = (age < 18) ?
// () => alert('Hello!'):
// () => alert("Greetings!");
// welcome ();

// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
//   };
  
//   alert( sum(1, 2) ); // 3

// const yosh = 10;
// const a = yosh > 18; //false
// const b = yosh < 20; //true
// //  AND operatori
// console.log(a && b); //false

// //  OR operatori
// console.log(a || b); //true

// //  NOT operatori
// console.log(!a); //true
// console.log(!b); //false

// const htmlPassed = false;
// const cssPassed = true;
// let message = ''

// if (htmlPassed && cssPassed) {
//     message = 'Siz Bootstrap kursini tugatishingiz lozim!'
// } else if (htmlPassed || cssPassed) {
//     message = 'Iltimos ikkinchi kursni ham tugating!'
// } else {
//     message = 'Iltimos birinchi ikkala kursti tugating!'
// }
// console.log(message)

// const javaPassed = true;
// const pythonPassed = true;
// let message = ''

// if (javaPassed && pythonPassed) {
//     message = 'Siz SQL kursini tugatishingiz lozim!'
// } else if (javaPassed || pythonPassed) {
//     message = 'Siz Python kuzsini tugatishindiz lozim!'
// } else {
//     message = 'Iltimos ikkala kursni tugatishingiz lozim!'
// }
// console.log(message)  

// const samsungUsed = true;
// const xiaomiUsed = false;
// let message = ''
// if (samsungUsed && xiaomiUsed) {
//     message = 'Siz Iphone modelini ishlatishingiz lozim!'
// } else if (samsungUsed || xiaomiUsed) {
//     message = 'Siz avvalo Samsung ishlatishingiz lozim!'
// } else {
//     message = 'Siz avvalo ikkala telefon modelini ishlatishingiz lozim!'
// }
// console.log(message)

// const yosh = '23'; //string
// console.log(yosh); //string
// console.log(Number(yosh)); //number

// console.log(yosh + 1); //231 (concatenation)
// console.log(Number(yosh) + 1); //24

// const yil = 2021; //Number
// console.log(yil); //Number
// console.log(String(yil)); //String

// console.log('Men' +  2005 + 'chi yilda tavallud topganman');
// console.log('30' - '10' - 5);

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// function myfunction(son1, son2) {
//     return son1 + son2;
// }

// console.log(myfunction(10, 20)); //30
// const result = myfunction(25, 75); //100
// console.log(result + 100); //200

// function kvadrat(son) {
//     return son * son
// }
// console.log(kvadrat (2))
// // console.log(kvadrat (10))

// const kvadrat = function(son) {
//     return son * son;
// }
// console.log(kvadrat(10));

// const kvadrat = (son) => {
//     return son * son;
// }   
// console.log(kvadrat(10)); //100.
 
// const kvadrat = son => son * son;
// console.log(kvadrat(10)); //100

// const print = () => console.log('Printing..');
// print(); //printing..   

// const volume = (a, b, c) => a * b * c;
// console. log(volume(1, 2, 3)); //6

//   Function declaration
//   function even0r0ddDec(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// even0r0ddDec(101);

// function even0r0ddDec(number) {
//   if (number %4 === 0) {
//     console.log(`${number} is even`);
//   } else {
//     console.log(`${number} is odd`);
//   }
// } 
// even0r0ddDec(202)

// const volume = (a, b, c) => a * b * c;
// console.log(volume(40, 42, 46));


// const calc = {
//   sum: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => a / b,
// };

// console.log(calc.sum(10, 20));
// console.log(calc.subtract(30, 20));
// console.log(calc.multiply(40, 50));
// console.log(calc.divide(60, 30));

// const yosh = '23'; //string
// console.log(yosh); //string
// console.log(Number(yosh)); //number

// const son = '71'; //string
// console.log(son); //string
// console.log(Number(son)); //number

// const yosh = '2'; //string
// const son = '4'; //string

// const calc = {
//  sum: function (a, b) {
//     return Number(a) + Number(b);
//  },
//  subtract: function (a, b) {
//     return Number(a) - Number(b);
//  },
//  multiply: function (a, b) {
//     return Number(a) * Number(b);
//  },
//  divide: function (a, b) {
//     return Number(a) / Number(b);
//  },
// };

// console.log(calc.sum(yosh, son)); //string
// console.log(calc.subtract(yosh, son)); //string
// console.log(calc.multiply(yosh, son)); //string
// console.log(calc.divide(yosh, son)); //string

// const number = '55'; //string
// const son = '50'; //string

// const calc = {
//   sum: function (a, b) {
//     return Number(a) + Number(b);
//   },
//   substract: function (a, b) {
//     return Number(a) - Number(b);
//   }
//   multiply: function (a, b) {
//     return Number(a) * Number(b);
//   }
//   divide: function (a, b) {
//     return Number(a) / Number(b);
//   }
// }
// console.log(calc.sum(number, son)); // 105
// console.log(calc.substract(number, son)); // 5
// console.log(calc.multiply(number, son)); // 2750
// console.log(calc.divide(number, son)); // 1.1


//  Function expression

// function evenOrOddExp(number) {
//         if (number % 2 === 0) {
//             console.log(`${number} is even`);
//         } else {
//             console.log(`${number} is odd`);
//         }
//     }
//     evenOrOddExp(3002)


// Arrow function

// function evenOrOddArrow(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// evenOrOddArrow(3);

   // Function declaration
//    function maxDec(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
//    }    
//    console.log(maxDec(2, 3))

    // // Function explanation
    // function maxExp(number1, number2) {
    //     if (number1 >= number2) {
    //         return number1;
    //     }
    //     return number2;
    //    }    
    //    console.log(maxExp(25, 5))

     // Arrow explanation
    //  function maxArrow(number1, number2) {
    //     if (number1 >= number2) {
    //         return number1;
    //     }
    //     return number2;
    //    }    
    //    console.log(maxArrow(5, 7))

    //    function maxDec(number0, number3) {
    //     if (number0 <= number3) {
    //         return number3
    //     }
    //     return number0
    //    }
    //    console.log(maxArrow(2, 7))

    //    function maxExp (number01, number02) {
    //     if (number01 >= number02) {
    //         return number01
    //     }
    //     return number02
    //     }
    //     console.log(maxExp(11, 10))


       //Function declaration
    //    function reveseDec (number) {
    //     const numberStr = String(number);
    //     const reversedStr = numberStr.split(''). reverse(''). join('');
    //     return Number(reversedStr)
    //    }
    //    console.log(reveseDec(15))

       //Function expression
    //    function reveseExp (number) {
    //     const numberStr = String(number);
    //     const reversedStr = numberStr.split(''). reverse(''). join('');
    //     return Number(reversedStr)
    //    }
    //    console.log(reveseExp(1234))

    //Function expression
    // function reveseArrow (number) {
    //     const numberStr = String(number);
    //     const reversedStr = numberStr.split(''). reverse(''). join('');
    //     return Number(reversedStr)
    //    }
    //    console.log(reveseArrow(1254))


    // const languages = ['eng', 'ru', 'uz'];
    // console.log(languages)

    // const helloArray = ['h', 'e', 'l', 'l', 'o'] 
    // console.log(helloArray(0));   
    
    // const helloJava = ['saaa', 66352];
    // console.log(helloJava)

    // let codeLang = ['java', 'go']
    // codeLang.push('json')
    // codeLang.push('react')
    // console.log(codeLang);

    // let codeLang = ['java', 'go'];  
    // codeLang.unshift('sass');
    // console.log(codeLang);

   //  let language = ['python', 'script'];
   //  language.unshift('swift');
   //  console.log(language);

   // let constan = ['mers', 'bmw'];
   // constan.push('audi');
   // console.log(constan)

   // function ask(question, yes, no) {
   //    if (confirm(question)) yes();
   //    else no();
   //  }
    
   //  ask(
   //    "Do you agree?",
   //    function() { alert("You agreed."); },
   //    function() { alert("You canceled the execution."); }
   //  );

   //  function askAgain(question, yes, no) {
   //    if (confirm(question)) yes();
   //    else no()
   //  }
   //  askAgain(
   //    "do you agree?",
   //    function() {alert('You agreed.')},
   //    function() {alert("You cenceled the execution."); }
   //  );

// const languages = ['js', 'java', 'go']
// languages[1] = 'swift';
// console.log(languages);

// const langs = ['samsung', 'vivo', 'oppo'];
// langs.push('apple');
// console.log(langs)

// const lags = ['samsung', 'vivo', 'oppo'];
// lags.unshift('apple');
// console.log(lags);


// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) alert( 'You are right!' );

// const languagges = ['clans', 'forbids', 'constrols'];
// languagges.unshift('clans');
// languagges[1] = ('scroll');
// console.log(languagges);
// let saturn = prompt('How much does it cost this flour?', '');
// if (saturn == $10) alert('you are right');
// console.log(saturn);


// // Finding the factors of a number
// let number = prompt('Enter a number to find its factors:', '');

// if (number == '') {
//  alert('You need to enter a number.');
// } else {
//  let factors = [];
//  for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//       factors.push(i);
//     }
//  }
//  alert(`The factors of ${number} are: ${factors.join(', ')}`);
// }

// if (n < 0)
//   alert(`Power ${n} is not supported`);


//   let user = {
//    name: "John",
//    age: 30
//  }; 
// console.log(user)

// const shares = ['bluetooth', 'wifi', 'nearby share'];
// console.log(shares);

// let str = '𝒳😂';
// for (let char of str) {
//     alert( char ); // 𝒳, and then 😂
// }

// let string = 'A👀';
// for (let char of string) {
//    alert( char )
// }

// let languages = ['java', 'go', 'python'];
// languages[0] = ('swift');
// console.log(languages);

// const languages = ['js', 'java', 'go', 'python'];
// const deleteLanguages = languages.pop();
// console.log(languages);
// console.log(deleteLanguages);

// let languages = ['js', 'java', 'go', 'swift'];
// const deleteLanguages = languages.shift();
// console.log(languages);
// console.log(deleteLanguages);

// let x = BigInt(123456789987456321);
// let type = typeof x;
// console.log(x)

// let x = 21214545487879n;
// let y = 48784646415457n;
// let z = x * y;
// console.log(z)

// let x = 12;
// let y = 12;
// let z = y * x;

// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();

// let x = 9.656;
// x.toFixed(0);
// x.toFixed(2);
// x.toFixed(4);
// x.toFixed(6);
// console.log(x)

// const d = new Date("2015-03-25");
// console.log(d);

// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// console.log(n)

// let x = BigInt(99999999999);
// let type = typeof x;
// console.log(x)

// let a = BigInt(99999999999999999989n);
// let b = BigInt(99999999999889999978n);
// let s = a * b;
// console.log(s)

// let a = 5, b = 10, c = 5;
// const z = a

// console.log(a == c); //true
// console.log(a === c); //false
// console.log(a == z); //true
// console.log(a === z); //true
// console.log(a != b); //true
// console.log(a != z); //false
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a >= b); //false
// console.log(a <= b); //true

 // Get the value from the input
//  const birthday = birthdayInput.value;

//  // Check if the value is empty
//  if (birthday === "") {
//    // If the value is empty, show an alert
//  const birthdayValue = birthdayEl.value;
//  if (birthdayValue === "") {
//    alert("Please enter your birthday");
//  } else {
//    // If the value is not empty, calculate the age
//    const age = getAge(birthday);

//    // Show the result
//    resultElement.innerHTML = `Your age is ${age} ${
//      age > 1 ? "years" : "year" // Check if the age is more than 1
//    } old`;
//    const age = getAge(birthdayValue);
//    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//  }
// }

// // Function to calculate the age
// function getAge(birthDay) {
//  // Get the current date
// function getAge(birthdayValue) {
//  const currentDate = new Date();

//  // Get the birthday date
//  const birthdayDate = new Date(birthDay);

//  // Calculate the age
//  const age = currentDate.getFullYear() - birthdayDate.getFullYear();

//  const birthdayDate = new Date(birthdayValue);
//  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//  const month = currentDate.getMonth() - birthdayDate.getMonth();

//  if (
//    month < 0 ||
//    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
//  ) {
//    age--;
//  }

//  // Return the age
//  return age;
// }

// btnEl.addEventListener("click", calculateAge);







// Variables

// let x = 10;
// let y = 20;
// let z = x * y;

// // Example using let
// let a = 105;
// let b = 15;
// let c = a * b;

// // Example using const
// const p = 45;
// const d = 5;
// const w = p / d;

// // Mixed example
// const price1 = 5;
// const price2 = 7;
// let total = price1 + price2;

// // const pi = 3.14;
// // let person = "John Doe";
// // let answer = 'Yes I am!';

// // One statement, many variables
// // let person = "John Doe", carName = "Volvo", price = 200;

// // In multiple lines

// let person = "John Doe";
// let carName = "Volvo";
// let price = 200;

// //  With $
// let $ = "Hello World";
// let $$$ = 2;
// let $myMoney = 5

// //   $("p") means 'select all p elements'

// //  Javascript Underscore (_)
// let _lastName = "Azamov";
// let _x = 15;
// let _150 = 15;

// //  Javascript arithmetic

// let f = 5 + 5 + 2;

// //  And with strings
// let numbers = "5" + 2 + 7 + 2; 

// Const and let
// {
//    const x = 2;
//    }

// var x = 16.5;
// var x = 20.2;
// x = 71;
   
// const x = 80;     // nllowed
// x = 41;           // not allowed
// var x = 10;       // not allowed
// let x = 201;      // not allowed
// const x = 67;     // not allowed

// {
//    const x = 22;   // Allowed
//    x = 44;         // Not allowed
//    var x = 2;     // Not allowed
//    let x = 2;     // Not allowed
//    const x = 2;   // Not allowed
//  }

// const x = 11;       // allowed

// {
//   const x = 15;     // allowed
// }

// {
//   const x = 44;     // allowed
// }

//   Operators
// let a = 3;
// let x = (100 + 50) * a;
// console.log(x);

// const c = 15;
// let b = 101;
// let y = (c * 42) + 720 * c + b;
// console.log(y);

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result);

// let number1 = "42";
// let number2 = "808";
// let result = number1 >= number2;
console.log(result);

// let text1 = "John";
// let text2 = "Goat";
// let result = text1 + " " + text2;    // " " can also used to add (concatenate) string
// console.log(result);

let describe = "Bmw is really";
describe += "fast car";    //  += topshiriq operatori 2ta stringni birlashtirish uchun ham ishlatilinadi
console.log()


let text1 = "John";
let text2 = "Goat";
let result = text1 + " " + text2;    // " " can also used to add (concatenate) string
console.log(result);
