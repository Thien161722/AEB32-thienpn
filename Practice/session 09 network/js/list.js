function vd2() {
  let url = "https://63a06bea24d74f9fe837c531.mockapi.io/users";
  let listUser = [];
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // listUser = data;
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // const LIST_USER_CARD = [
  //   {
  //     name: "Carlos Wilkinson",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg",
  //     city: "Nigelshire",
  //     id: "45",
  //   },
  //   {
  //     name: "Lorraine Zemlak",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg",
  //     city: "Amiyachester",
  //     id: "46",
  //   },
  //   {
  //     name: "Dr. Lola Goodwin Jr.",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/373.jpg",
  //     city: "Leannonbury",
  //     id: "47",
  //   },
  //   {
  //     name: "Jonathon Wehner",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg",
  //     city: "Sincerefort",
  //     id: "48",
  //   },
  //   {
  //     name: "Gertrude Nienow",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
  //     city: "Draper",
  //     id: "49",
  //   },
  //   {
  //       name: "Gertrude Nienow",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
  //       city: "Draper",
  //       id: "49",
  //     },
  // ];

  function _renderUI(listUser) {
    let elm = document.getElementById("div__content");
    function formatUICard(user) {
      return `
      <div class="card col-4">
          <img
              src="${user.avatar}"
              ,
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      `;
    }

    let resUI = "";
    for (let index = 0; index < listUser.length; index++) {
      resUI += formatUICard(listUser[index]);
    }

    elm.innerHTML = resUI;
  }
  
}

vd2();
