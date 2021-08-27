const popupView = document.querySelector(".popup");
const editButton = note => {
  popupView.style.display = "block";
  document.querySelector("#display").innerHTML = note;
};
let cancel = document.querySelector(".close");
cancel.onclick = function () {
  popupView.style.display = "none";
};
