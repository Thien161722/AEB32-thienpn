const url = "https://63a06bea24d74f9fe837c531.mockapi.io/users";

getListUser();

// fetch(url, {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     // listUser = data;
//     _renderUI(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// const listUser = [
//   {
//     id: 1,
//     name: "name1",
//     age: 30,
//     address: "address1",
//   },
//   {
//     id: 2,
//     name: "name2",
//     age: 35,
//     address: "address2",
//   },
//   {
//     id: 3,
//     name: "name3",
//     age: 37,
//     address: "address3",
//   }
// ];
function _renderUI(listUser) {
  let eleBodyTable = document.getElementById("tbody__user");
  // console.log(eleBodyTable);
  let resRow = "";
  for (let index = 0; index < listUser.length; index++) {
    resRow += formatRowUser(listUser[index]);
  }

  function formatRowUser(user) {
    return `<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td class="text-break">${user.avatar}</td>
      <td>
        <button class="btn btn-primary" onclick='goToDetail(${user.id})'>Detail</button>
        <button class="btn btn-danger" onclick='userDelete(${user.id})'>Delete</button>
        <button type="button" class="btn btn-success" onclick='goToFormToEdit(${user.id})'>Edit</button>
      </td>
    </tr>`;
  }
  eleBodyTable.innerHTML = resRow;
}

function getListUser() {
  // console.log(url);
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // listUser = data;
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function goToDetail(userId) {
  console.log(userId);
  window.location.href = `./detail.html?id=${userId}`;
}

function userDelete(userId) {
  console.log(url);
  // console.log(id);
  let url_delete = url + "/" + userId;
  console.log(url_delete);
  fetch(url_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function goToFormToEdit(userId) {
  console.log(userId);
  window.location.href = `./form.html?id=${userId}`;
}


