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

