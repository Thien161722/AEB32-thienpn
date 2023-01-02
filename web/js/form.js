const urlProject = "https://63a06bea24d74f9fe837c531.mockapi.io/projects";
let url = new URLSearchParams(window.location.search);
let id = url.get("id");


if (id) {
  getProject();
}

function getProject() {
  fetch(`${urlProject}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let inputCustomer = document.getElementById("inputCustomer");
      let inputProject = document.getElementById("inputProject");
      let inputPerson = document.getElementById("inputName");
      let inputProgress = document.getElementById("inputProgress");
      // console.log(data.name);
      inputCustomer.value = data.customer;
      inputProject.value = data.nameproject;
      inputPerson.value = data.name;
      inputProgress.value = data.progress;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  //   console.log("ach");
  let inputCustomer = document.getElementById("inputCustomer").value;
  let inputProject = document.getElementById("inputProject").value;
  let inputPerson = document.getElementById("inputName").value;
  let inputProgress = document.getElementById("inputProgress").value;
  let project = {
    customer: inputCustomer,
    nameproject: inputProject,
    name: inputPerson,
    progress: inputProgress,
  };
  //   console.log(project);
  if (id) {
    updateProject(project);
  } else {
    postProject(project);
  }
}

function postProject(project) {
  fetch(urlProject, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  })
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      returnListProject();
      alert('Thêm dự án thành công!');
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateProject(project) {
  fetch(`${urlProject}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  })
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      returnListProject();
      alert('Cập nhật thông tin dự án thành công!');
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function returnListProject() {
  window.location.href = `./listProject.html`;
}

function handleModifleInputProgress() {
  let elmInputProgress = document.getElementById("inputProgress");
  elmInputProgress.value = elmInputProgress.value.replace(/[a-z]+/i, "");
  // console.log(elmInputProgress.value);
  // console.log(elm);
}
