"use strict";

const fn = () => 1; // 箭头函数, 返回值为1


console.log(fn());
let num = 3 ** 2;

let foo = function foo(a, b, c) {
  // ES7参数支持尾部逗号
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
console.log(fn());
console.log(num);