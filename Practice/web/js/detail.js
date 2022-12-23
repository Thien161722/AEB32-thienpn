
  let urlDetail = new URLSearchParams(window.location.search);
  console.log(urlDetail);
  let id = urlDetail.get("id");
  console.log(id);


// function getIdUrl() {
//   let url = new URL(window.location.href);
//   let id = url.searchParams.get("id");
//   return id;
// }

const url = "https://63a06bea24d74f9fe837c531.mockapi.io/users/" +id;
//   let listUser = [];
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

function _renderUI(user) {
  console.log(user);
  let ele = document.getElementById("infor__user");
  ele.innerHTML = `
    <p>${user.id}</p>
    <p>${user.name}</p>
    <p>${user.city}</p>
    <p>${user.avatar}</p>
    `;
}
