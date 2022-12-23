
function vd1() {
  let url = 'https://63a06bea24d74f9fe837c531.mockapi.io/users';
 
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
    return `<tr onclick='handleClickRow(${user.id})'>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td>${user.avatar}</td>
    </tr>`;
  }
  eleBodyTable.innerHTML = resRow;
  }

  
}

function handleClickRow(userId) {
  console.log(userId);
  window.location.href = `../detail.html?id=${userId}`;
}
vd1();





