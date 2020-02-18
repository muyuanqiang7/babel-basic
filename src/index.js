const fn = () => 1; // 箭头函数, 返回值为1
console.log(fn());

let num = 3 ** 2;
let addresses = [1, 2, 3, 4, 5, 6, 7];
let test = function () {
    addresses.forEach((item, index, array) => {
        console.log(item);
        console.log(index);
        console.log(array);
    })
}
let foo = function (a, b, c,) { // ES7参数支持尾部逗号
    console.log('a:', a);
    console.log('b:', b);
    console.log('c:', c)
};
foo(1, 3, 4);
console.log(fn());
console.log(num);
