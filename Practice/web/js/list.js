// console.log(1);

let user = {
  id: 1,
  name: "nam",
  age: 30,
  address: "address1",
};

const listUser = [
  {
    id: 1,
    name: "name1",
    age: 30,
    address: "address1",
  },
  {
    id: 1,
    name: "name1",
    age: 30,
    address: "address1",
  },
];
let eleBodyTable = document.getElementById("tbody__user");

// console.log(eleBodyTable);
let resRow = "";
for (let index = 0; index < listUser.length; index++) {
  resRow += formatRowUser(user);
  
}
eleBodyTable.innerHTML(resRow);


function formatRowUser(_user) {
  return `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.address}</td>
  </tr>`;
}
