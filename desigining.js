"use strict";

const calcAge = function (birthyear) {
  const age = 2037 - birthyear;
  return age;
};

console.log(calcAge(1999));
