const url = "https://63a06bea24d74f9fe837c531.mockapi.io/users";

let urlDetail = new URLSearchParams(window.location.search);

let id = urlDetail.get("id");

if (id) {
  getUser();
}


function getUser() {
  fetch(`${url}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let elmName = document.getElementById("inputName");
      let elmCity = document.getElementById("inputCity");
      let elmAvatar = document.getElementById("inputAvatar");
      // console.log(data.name);
      elmName.value = data.name;
      elmCity.value = data.city;
      elmAvatar.value = data.avatar;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  // console.log('handleSubmit');
  let elmName = document.getElementById("inputName");
  let elmCity = document.getElementById("inputCity");
  let elmAvatar = document.getElementById("inputAvatar");
  let user = {
    name: elmName.value,
    city: elmCity.value,
    avatar: elmAvatar.value,
  };

  if (id) {
    updateUser(user);
  } else {
    postUser(user);
  }
}

function postUser(user) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(user) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
