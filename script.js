const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButtons = document.querySelectorAll(".close-modal");
const showModalButtons = document.querySelectorAll(".show-modal");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

// Add click event listeners to each show modal button
showModalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

// Add click event listeners to each close button
closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

// Add click event listener to the overlay to close the modal
overlay.addEventListener("click", closeModal);

// Add an event listener to close the modal when the escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
