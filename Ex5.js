/**
 * B1: tao bien num, donVi, chuc, digitSum
 * B2: gan gia tri cho num
 * B3: lay chu so hang don vi theo cong thuc num % 10;
 * B4: lay chu so hang chuc theo cong thuc num/10;
 * B5: tinh tong chu so digitSum = donVi + chuc
 * B6: in ra man hinh console.
 */
var num = 63;
var donVi = num % 10;
num = Math.floor(num / 10);
var chuc = num;
var digitSum = donVi + chuc;
console.log(digitSum);