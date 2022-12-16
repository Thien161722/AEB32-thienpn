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
  console.log(parseInt(a));
}
// bai3();

function bai4() {
  let input = prompt("nhap vao so nguyen co 2 chu so:");
  let a = parseInt(input);

  if (a > 0) {
    console.log(Math.floor(a / 10));
    console.log(a % 10);
  } else {
    if (a % 10 === 0) {
      console.log(Math.floor(a / 10));
    } else {
      console.log(Math.floor(a / 10) + 1);
    }
    console.log((a % 10) * -1);
  }
}
// bai4();

function bai5() {
  let input = prompt("nhap vao mot so tu nhien n lon hon 1:");
  let count = 0;
  for (let i = 1; i <= input; i++) {
    if (input % i === 0) {
      count = count + 1;
    }
  }
  if (count === 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
// bai5();

// function checkNT(number) {
//   let isNT = true;
//   for (let i = 2; i < n; i++) {
//     if (number % i === 0) {
//       isNT = false;
//     }
//   }
//   return isNT;
// }
// let res = checkNT();
// console.log(res);

function bai6() {
  let input = prompt("nhap 2 so nguyen duong (cach boi dau ", "):");
  // console.log(typeof(input));
  let A = input.split(",");
  let m = parseInt(A[0]);
  let n = parseInt(A[1]);
  let arr = [];
  for (let i = 1; i <= m; i++) {
    if (m % i === 0 && n % i === 0) {
      arr.push(i);
    }
  }
  console.log(arr[arr.length - 1]);
}
// bai6();

function bai7() {
  let input = prompt("nhap chuoi ký tu:");
  let str = "";
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) !== " ") {
      if (input.charAt(i) === input.charAt(i).toUpperCase()) {
        str = str.concat(input.charAt(i).toLowerCase());
      } else {
        str = str.concat(input.charAt(i).toUpperCase());
      }
    } else {
      str = str.concat(" ");
    }
  }
  console.log(str);
}
// bai7();

function bai8() {
  let input = prompt("nhap chuoi ky tu:");
  let A = input.split(" ");

  A.forEach((element) => {
    console.log(element.length);
  });
}
// bai8();

function bai10() {
  let input = prompt("nhap a, b, c:");
  let A = input.split(",");
  let N = A[0];
  let a = A[1];
  let b = A[2];
  // phan tich de bai
  if (2 * a >= b) {
    console.log(parseInt((N / 2) * b) + (N % 2) * a);
  } else {
    console.log(N * a);
  }
}
// bai10();

function bai9() {
  let input = prompt("nhap so nguyen duong N:");
  let N = parseInt(input);
  let count = 0;
  let A = [];
  for (let i = 2; i <= N; i++) {
    while (N % i === 0) {
      N = N / i;
      A.push(i);
    }
  }
  for (let j = 1; j <= input; j++) {
    if (input % j === 0) {
      count++;
    }
  }
  console.log(A);
  console.log(count);
}
// bai9();
