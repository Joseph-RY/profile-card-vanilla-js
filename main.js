let personData = {
  name: "Ivan",
  surname: "Ivanov",
  patronymic: "Ivanovich",
  gender: "M",
  dateOfBirth: "24/08/1991",
  dateOfExpiry: "13/12/2025",
};

let mainBox = document.querySelector("#main");
mainBox.style.backgroundColor = "#f1e1e9";
mainBox.style.borderRadius = "20px";
mainBox.style.margin = "auto";
mainBox.style.height = "300px";
mainBox.style.width = "550px";
mainBox.style.padding = "20px";
mainBox.style.display = "flex";
mainBox.style.alignItems = "center";
mainBox.style.gap = "40px";

let img = document.createElement("img");
img.src = "./images/male.jpg";
img.style.borderRadius = "5px";
img.style.width = "180px";
mainBox.appendChild(img);

let textBox = document.createElement("div");
textBox.style.display = "flex";
textBox.style.flexDirection = "column";
textBox.style.gap = "20px"
mainBox.appendChild(textBox);

let firstName = document.createElement("p");
firstName.innerHTML = `first Name: ${personData.name}`;
firstName.style.fontSize = "25px";
firstName.style.fontWeight = "bold";
firstName.style.margin = "0px"
textBox.appendChild(firstName);

let lastName = document.createElement("p");
lastName.innerHTML = `last Name: ${personData.surname}`;
lastName.style.fontSize = "25px";
lastName.style.fontWeight = "bold";
lastName.style.margin = "0px"
textBox.appendChild(lastName);

let patronymic = document.createElement("p");
patronymic.innerHTML = `patronymic: ${personData.patronymic}`;
patronymic.style.fontSize = "25px";
patronymic.style.fontWeight = "bold";
patronymic.style.margin = "0px"
textBox.appendChild(patronymic);

let gender = document.createElement("p");
gender.innerHTML = `gender: ${personData.gender}`;
gender.style.fontSize = "25px";
gender.style.fontWeight = "bold";
gender.style.margin = "0px"
textBox.appendChild(gender);

let dateOfBirth = document.createElement("p");
dateOfBirth.innerHTML = `date of birth: ${personData.dateOfBirth}`;
dateOfBirth.style.fontSize = "25px";
dateOfBirth.style.fontWeight = "bold";
dateOfBirth.style.margin = "0px"
textBox.appendChild(dateOfBirth);

let dateOfExpiry = document.createElement("p");
dateOfExpiry.innerHTML = `date of expiry: ${personData.dateOfExpiry}`;
dateOfExpiry.style.fontSize = "25px";
dateOfExpiry.style.fontWeight = "bold";
dateOfExpiry.style.margin = "0px"
textBox.appendChild(dateOfExpiry);
