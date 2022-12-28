const urlProject = "https://63a06bea24d74f9fe837c531.mockapi.io/projects";

function _renderProject(project) {
  let elmBodyTable = document.getElementById("tbody__project");
  let resRow = "";
  let countRow = 0;
  for (let index = 0; index < project.length; index++) {
    countRow++;
    resRow += formatRowProject(project[index], countRow);
  }
  function formatRowProject(project, countRow) {
    return `<tr>
    <td class="text-center">${countRow}</td>
    <td class="text-center">${project.id}</td>
    <td>${project.customer}</td>
    <td>${project.nameproject}</td>
    <td>${project.name}</td>
    <td class="text-center">${project.progress}%</td>
    <td>
      <button type="button" class="btn btn-info" onclick='goToDetail(${project.id})'>Chi tiết</button>
      <button type="button" class="btn btn-success" onclick='goToUpdate(${project.id})'>Cập nhật</button>
      <button type="button" class="btn btn-danger" onclick='projectDelete(${project.id})'>Xoá</button>
    </td>
  </tr>`;
  }
  elmBodyTable.innerHTML = resRow;
}

function getListProject() {
  // console.log(url);
  fetch(urlProject, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // listUser = data;
      _renderProject(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getListProject();

function projectDelete(projectId) {
  console.log(urlProject);
  // console.log(id);
  let url_delete = urlProject + "/" + projectId;
  console.log(url_delete);
  fetch(url_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListProject();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function gotoForm() {
  window.location.href = `./form.html`;
}

function goToUpdate(projectId) {
  window.location.href = `./form.html?id=${projectId}`;
}

function goToDetail(projectId) {
  // console.log(projectId);
  window.location.href = `./detail.html?id=${projectId}`;
}