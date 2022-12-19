
const listUser = [
  {
    id: 1,
    name: "name1",
    age: 30,
    address: "address1",
  },
  {
    id: 2,
    name: "name2",
    age: 35,
    address: "address2",
  },
  {
    id: 3,
    name: "name3",
    age: 37,
    address: "address3",
  }
];
let eleBodyTable = document.getElementById("tbody__user");
// console.log(eleBodyTable);
let resRow = "";
for (let index = 0; index < listUser.length; index++) {
  resRow += formatRowUser(listUser[index]);
}

function formatRowUser(_user) {
  return `<tr>
    <td>${_user.id}</td>
    <td>${_user.name}</td>
    <td>${_user.age}</td>
    <td>${_user.address}</td>
  </tr>`;
}
eleBodyTable.innerHTML = resRow;

