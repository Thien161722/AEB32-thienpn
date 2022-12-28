const url = "https://63a06bea24d74f9fe837c531.mockapi.io/products";

function _renderUi(products) {
  let elmimg = document.getElementById("img");
  let resproduct = "";
  for (let index = 0; index < products.length; index++) {
    resproduct += formatUi(products[index]);
  }
  function formatUi(products) {
    return `
    
            <div class="parent">
              <div class="left__column">
                <div class="img__product">
                  <img src=${products.image} class="spec__img" alt="" />
                </div>
              </div>
              <div class="right__column">
                <div class="detail">
                  <h2>Clothing & Apparel</h2>
                  <p>Accessories</p>
                  <p>Bags</p>
                  <p>Kid's Fashion</p>
                  <p>Mens</p>
                </div>
              </div>
            </div>
          
    `;
  }
  elmimg.innerHTML = resproduct;
}

function getProductsId() {
    fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // listUser = data;
          _renderUi(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
}

getProductsId();
