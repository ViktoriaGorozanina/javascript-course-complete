'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial`;
      console.log(str);
      //creating a new variable with the same name as in the outer scope's variable. It will be used, since variable look=up will stop after searching in this scope.
      const firstName = `Nick`;
      //reassigning outer scope's variable
      output = `New output!`;

      function add(a, b) {
        return a + b;
      }
      //   console.log(add(2, 3));
    }
  }
  printAge();

  return age;
}

const firstName = `Victoria`;
calcAge(1991);
