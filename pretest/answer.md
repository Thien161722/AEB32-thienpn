

<!-- load header -->
window.onload = function () {
  loadHeader();
};

function loadHeader() {
  let elm = document.querySelector("header");
  if (elm) {
    fetch("./header.html", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        elm.innerHTML = data;
        handleShowBtn();
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
<!--  -->


<!-- an va hien nut login, logout -->
function handleShowBtn() {
  // get param url
  let urlDetail = new URLSearchParams(window.location.search);
  let isLogin = urlDetail.get("isLogin");

  let btnLogin = document.getElementById("btnLogin");
  let btnLogout = document.getElementById("btnLogout");
  
  if (isLogin) {
    // btnLogin?.classList.add("d-none");
    // btnLogout?.classList.remove("d-none");

    btnLogin.style.display = 'none'
    btnLogout.style.display = 'block'
  } else {
    btnLogout?.classList.add("d-none");
    btnLogin?.classList.remove("d-none");
  }
}
<!--  -->



<!-- di den trang khac -->
function gotoForm() {
  window.location.href = './form.html'
}
<!--  -->




<!-- format gia tri nhap vao theo type mail -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detail</title>
    <link rel="stylesheet" href="./css/common.css" />
  </head>
  <body>
    <form onsubmit="return false">
      <input
        type="text"
        onchange="handleChange(this)"
      />
      <button>Click</button>
    </form>
    <script>
      const EMAIL =
        /^(?![-_.+])([a-zA-Z0-9-_.+](?![-_.+]{2,}))+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
      function handleChange(elm) {
        console.log("handleChange", elm.value);
        elm.value = elm.value.replace(/[0-9]/g, "");
        elm.value = elm.value.replace(/[^\d]/g, "");
        if (EMAIL.test(elm.value)) {
          document.getElementById("error").innerHTML = "";
        } else {
          document.getElementById("error").innerHTML = "yeu cau nhap lai email";
        }
      }
    </script>
  </body>
</html>
<!--  -->


<!-- kiem tra password -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <header></header>
    <div class="d-flex" style="height: 100vh">
      <form class="w-25 m-auto p-5 border" onsubmit="return false">
        <div class="mb-3">
          <label for="inputUserName" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputUserName"
            aria-describedby="userNameHelp"
          />
          <div id="userNameHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="inputPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" onclick="handleSubmmit()" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </body>
  <script>
    function handleSubmmit() {
      let valueUserName = document.getElementById("inputUserName")?.value;
      let valuePassword = document.getElementById("inputPassword")?.value;
      if (valueUserName?.toLowerCase() === 'aptech' && valuePassword?.toLowerCase() === 'aptech') {
        alert('Login Success!!!')
        window.location.href = './list.html?isLogin=true'
      }else{
        alert('Login Fail!!!')
      }
    }
  </script>
  <script src="./js/common.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
    crossorigin="anonymous"
  ></script>
</html>
<!--  -->


<!-- hien thi va an nut login, logout -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="row p-2">
      <ul class="nav col-11">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="./list.html">List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./form.html">Form</a>
        </li>
      </ul>
      <div class="col">
        <button type="button" class="btn btn-success" id="btnLogin" onclick="gotoForm()">
          Login
        </button>
        <button type="button" class="btn btn-danger" id="btnLogout" onclick="gotoForm()">
          Logout
        </button>
      </div>
    </div>
  </body>
  <script src="./js/common.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
    crossorigin="anonymous"
  ></script>
</html>
<!--  -->


<!-- dum data vao mockapi -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>List</title>
    <link rel="stylesheet" href="./css/common.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <header></header>
    <div class="text-center">
      <div
        class="d-flex justify-content-center flex-wrap mt-3"
        id="view__content"
      ></div>
    </div>
  </body>
  <script>
    let products = [
      {
        image: "https://loremflickr.com/640/480/technics",
        name: "Clothing & Apparel1",
        detail1: "Accessories",
        detail2: "Bags",
        detail3: "Kid's Fashion",
        detail4: "Mens",
      },
      {
        image: "https://loremflickr.com/640/480/technics",
        name: "Clothing & Apparel2",
        detail1: "Accessories",
        detail2: "Bags",
        detail3: "Kid's Fashion",
        detail4: "Mens",
      },
      {
        image: "https://loremflickr.com/640/480/technics",
        name: "Clothing & Apparel3",
        detail1: "Accessories",
        detail2: "Bags",
        detail3: "Kid's Fashion",
        detail4: "Mens",
      },
      {
        image: "https://loremflickr.com/640/480/technics",
        name: "Clothing & Apparel4",
        detail1: "Accessories",
        detail2: "Bags",
        detail3: "Kid's Fashion",
        detail4: "Mens",
      },
      {
        image: "https://loremflickr.com/640/480/technics",
        name: "Clothing & Apparel5",
        detail1: "Accessories",
        detail2: "Bags",
        detail3: "Kid's Fashion",
        detail4: "Mens",
      },
      {
        image: "https://loremflickr.com/640/480/technics",
        name: "Clothing & Apparel6",
        detail1: "Accessories",
        detail2: "Bags",
        detail3: "Kid's Fashion",
        detail4: "Mens",
      },
    ];

    _renderUI(products);
    // dumpDataAPI(products);
    // getDataAPI();

    function _renderUI(data) {
      let res = "";
      let elm = document.getElementById("view__content");
      data.map((item) => {
        res += `
        <div class="d-flex border order-3 p-2 mx-1">
            <div class="px-4 align-self-center flex__05">
                <img
                    src="${item.image}"
                    alt=""
                />
            </div>
            <div class="py-3 flex__05">
                <h5>${item.name}</h5>
                <p class="fw-light">${item.detail1}</p>
                <p class="fw-light">${item.detail2}</p>
                <p class="fw-light">${item.detail3}</p>
                <p class="fw-light">${item.detail4}</p>
            </div>
        </div>
        `;
      });
      elm.innerHTML = res;
    }
    function dumpDataAPI(data) {
      const URL_PRODUCTS =
      "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/products";
      data.map((item) => {
        fetch(URL_PRODUCTS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }
    function getDataAPI() {
      const URL_PRODUCTS =
        "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/products";
      fetch(URL_PRODUCTS, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          _renderUI(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  </script>
  <script src="./js/common.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
    crossorigin="anonymous"
  ></script>

</html>
<!--  -->