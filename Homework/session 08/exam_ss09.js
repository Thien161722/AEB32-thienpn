function createTGV() {
  let input = prompt("nhap chieu cao:");
  let h = parseInt(input);
  let star = "";
  for (let i = 1; i <= h; i++) {
    star += "*";
    console.log(star);
  }
}
// createTGV();

// ve tam giac deu
// h =5             star, space -> h & index
//    *             index = 1, * = 1 : 2 * index -1 , space = 4 : h-index
//   ***            index = 2, * = 3 , space = 3
//  *****           index = 3, * = 5 , space = 2
// *******          index = 4, * = 7,  sapce = 1
//*********         index = 5, * = 9,  sapce = 0
// quy luat:  star = 2*index - 1;  space = h-index;

function createTGC() {
  let input = prompt("nhap chieu cao:");
  let h = parseInt(input);
  let star = "*";
  let space = "\xa0";
  for (let i = 1; i <= h; i++) {
    console.log(space.repeat(h - i) + star.repeat(2 * i - 1));
  }
}
// createTGC();

// phan tich bai1
// n = 5
// A = [a,b,c,d,e]
// a = e -> A[0] = A[5] -> A[0] = A[n-1-0]
// b = d -> A[1] = A[4] -> A[1] = A[n-1-1]
// -> kiem tra: A[i] === A[n-1-i] & 0 <= i <= parseInt(n/2)-1

function bai1() {
  let inputNum = prompt("nhap so nguyen duong n:");
  let inputArr = prompt("nhap n so, cac so cach nhau bang dau cach:");
  let N = parseInt(inputNum);
  let arr = inputArr.split(" ");
  let count = 0;
  for (let index = 0; index <= parseInt(N / 2) - 1; index++) {
    if (parseInt(arr[index]) !== parseInt(arr[N - 1 - index])) {
      count++;
    }
  }
  if (count > 0) {
    console.log("FALSE");
  } else {
    console.log("TRUE");
  }
}
// bai1();

// phan tich bai2
// ma tran A co co: m = 3; n = 2; so nguyen k
//      a11 a12
// A =  a21 a22
//      a31 a32
// kiem tra A[i][j] === k (voi 0<=i<=m-1 va 0<=j<=n-1)

function bai2() {
  let inputSizeMatrixAndRef = prompt("nhap kich co ma tran mxn va so k:");
  let M = inputSizeMatrixAndRef.split(" ");
  let m = parseInt(M[0]);
  let n = parseInt(M[1]);
  let k = parseInt(M[2]);
  let A = [];
  for (let i = 0; i < m; i++) {
    let inputROw = prompt("nhap " + n + " phan tu cua hang " + (i + 1));
    let ref = inputROw.split(" ");
    let row = [];
    for (let j = 0; j < n; j++) {
      let Aij = parseInt(ref[j]);
      row.push(Aij);
    }
    A.push(row);
  }
  let count = 0;
  for (let a = 0; a < m; a++) {
    for (let b = 0; b < n; b++) {
      if (A[a][b] === k) {
        count++;
      }
    }
  }
  console.log(count);
}
// bai2();

// phan tich bai3
// day so co N = 5 so nguyen duong
// nhap so k <= N, k = 5
// [5, 3, 8, 6, 7]
// k = 1 -> x = 8 voi index = 2 -> k = 1 dung max cua day so
// k = 2 -> x = 7 voi index = 4 -> lap voi so lan 0<=i<N, dem count lon hon cua moi index -> count = 3 k = 2 -> count === N-k break
// k = 3 -> x = 6 voi index = 3 -> lap voi so lan 0<=i<N, dem count lon hon cua moi index -> count = 2 k = 3 -> count === N-k break
// k = 4 -> x = 5 voi index = 0 -> lap voi so lan 0<=i<N, dem count lon hon cua moi index -> count = 1 k = 4 -> count === N-k break
// k = 5 -> x = 3 voi index = 1 -> k=N dùng min cua day so
// lap vong 1 lay gia tri tung index ra de so sanh
// lap vong 2 lay gia tri tung i ra de so sanh voi index, dem so luong gia tri index > i, neu count === N-k dung vong lap, log gia tri
function bai3() {
  let input = prompt("nhap so luong so luong so trong day va so lon thu k:");
  let ref = input.split(" ");
  let N = parseInt(ref[0]);
  let k = parseInt(ref[1]);
  let inputArr = prompt("nhap" + N + "so cua day so:");
  let A = inputArr.split(" ");
  for (let i = 0; i < N; i++) {
    let count = 0;
    let countSame = 0;
    for (let index = 0; index < N; index++) {
      if (parseInt(A[i]) === parseInt(A[index])) {
        countSame++;
      }
      if (parseInt(A[i]) > parseInt(A[index])) {
        count++;
      }
    }
    if (countSame > 1) {
      N = N - countSame + 1;
    }
    if (N < k) {
      console.log("day so khong co so lon thu" + k);
      break;
    } else {
      if (count === N - k) {
        console.log(A[i]);
        break;
      }
    }
  }
}
// bai3();

// phan tich bai 4
// nhap so truong hop t , nhap t so nguyen duong
// t = 2; a = 150; b = 2400;
// 1 of a -> 1 = parseInt(parseInt(a)/pow(10,length - 1 - index)) va 50 = parseInt(a) % pow(10,length - index)
// 5 of a -> 5 = parseInt(parseInt(a)/pow(10,length - 1 - index)) va 0 = parseInt(a) % pow(10,length - index)
// 0 of a -> parseInt(parseInt(a)/pow(10,length - 1 - index)) va a = parseInt(a) % pow(10,length - index)
// tinh tong cac phan tu cua mang
function bai4() {
  let input = prompt("nhap so truong hop:");
  let t = parseInt(input);
  let A = [];
  for (let i = 0; i < t; i++) {
    let inputNumber = prompt(
      "nhap so thu " + (i + 1) + " can tinh tong cac chu so:"
    );
    let length = inputNumber.length;
    let num = parseInt(inputNumber);
    let value = 0;
    for (let index = 0; index < length; index++) {
      value = value + Math.floor(num / Math.pow(10, length - 1 - index));
      if (length > index + 1) {
        num = num % Math.pow(10, length - 1 - index);
      }
    }
    A.push(value);
  }
  for (let j = 0; j < A.length; j++) {
    console.log(A[j]);
  }
}
// bai4();

// phan tich bai 5
