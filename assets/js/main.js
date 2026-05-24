
const listIcon = document.querySelector(".list-icon");

const navModal = document.querySelector(".nav-modal");

const modalCloseButton = document.querySelector(".nav-modal .close-button");

modalCloseButton.addEventListener("click", () => {
  navModal.classList.remove("active");
});

listIcon.addEventListener("click", () => {
  navModal.classList.add("active");
});


const filterModalButton = document.querySelector(".filter-modal-icon");
const filterModal = document.querySelector(".filter-modal");
const filterModalClose = document.querySelector(".filter-modal .close-button");

filterModalClose.addEventListener("click", () => {
  filterModal.classList.remove("active");
});

filterModalButton.addEventListener("click", () => {
  filterModal.classList.add("active");
});