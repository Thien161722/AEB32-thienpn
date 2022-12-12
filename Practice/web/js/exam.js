function bai1() {
  let input = prompt("nhap so nguyen n:");
  let output = input * 2;
  console.log(output);
}
// bai1();

function bai2() {
  let a = prompt("nhap a:");
  aa = parseInt(a);
  let b = prompt("nhap b:");
  bb = parseInt(b);
  let c = prompt("nhap c:");
  cc = parseInt(c);
  let d = prompt("nhap d:");
  dd = parseInt(d);
  let arr = [aa, bb, cc, dd];
  let min = arr[0];
  if (min > arr[1]) {
    min = arr[1];
  }
  if (min > arr[2]) {
    min = arr[2];
  }
  if (min > arr[3]) {
    min = arr[3];
  }
  console.log(min);
}
// bai2();

function bai3() {
  let input = prompt("nhap so nguyen n:");
  let a = (input - 1) / 2;
  // console.log(a);
  if (a % 2 != 0) {
    console.log(a - 0.5);
  } else {
    console.log(a);
  }
}
// bai3();

function bai4() {
  let input = prompt("nhap vao so nguyen co 2 chu so:");

  console.log(Math.floor(input / 10), (input % 10));
  //   console.log(Math.floor(input / 10), input % 10);
}
bai4();

// function bai5() {
//     let input = prompt('nhap vao mot so tu nhien n:');

// }
