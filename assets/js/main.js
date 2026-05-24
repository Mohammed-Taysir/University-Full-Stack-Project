
const listIcon = document.querySelector(".list-icon");

const modal = document.querySelector(".modal");

const modalCloseButton = document.querySelector(".modal .close-button");

modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

listIcon.addEventListener("click", () => {
  modal.classList.add("active");
});

