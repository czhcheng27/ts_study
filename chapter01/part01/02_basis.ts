let a: Number;
// a的类型设置为了number，在以后a的使用中a的值只能是数字

a = 10;
a = 20;
// a = 'asa' //此行代码会报错

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(123, 456)); //579
// console.log(sum(123, "456")); //123456

function sum1(a: number, b: number) {
  return a + b;
}

sum1(133, "456"); //类型
sum(1233, 1525, 166); //数量
