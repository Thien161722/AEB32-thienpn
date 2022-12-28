const urlProject = "https://63a06bea24d74f9fe837c531.mockapi.io/projects";
let urlDetail = new URLSearchParams(window.location.search);
// console.log(urlDetail);
let id = urlDetail.get("id");
// console.log(id);

fetch(`${urlProject}/${id}`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
      _renderUI(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderUI(project) {
    // console.log('avg');
  let elmCustomer = document.getElementById("inputCustomer");
  let elmNameProject = document.getElementById("inputNameProject");
  let elmCName = document.getElementById("inputName");
  let elmProgress = document.getElementById("inputProgress");
  elmCustomer.value = project.customer;
  elmNameProject.value = project.nameproject;
  elmCName.value = project.name;
  elmProgress.value = `${project.progress}%`;
}
