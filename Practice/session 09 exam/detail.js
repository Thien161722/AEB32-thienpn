let url = "https://63a06bea24d74f9fe837c531.mockapi.io/users/2";
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
