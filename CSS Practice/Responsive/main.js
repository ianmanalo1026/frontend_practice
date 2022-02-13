let hamburger = document.querySelector(".hamburger");
let modalBtn = document.querySelector(".modal_btn");
let modalBg = document.querySelector(".modal_bg");
let modaClose = document.querySelector(".modal-close");
let contactBtn = document.querySelector(".contact-btn");
let contactDetails = document.querySelector(".contact-details");

// Hamburger NavBar Section
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modaClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

contactBtn.addEventListener("click", function () {
  contactDetails.classList.add("contact-active");
});
