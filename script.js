/* Grabbing elements form DOM */

/* getElementById */

/* buttons */

const subscribeButton = document.getElementById("subscribe__button");
const dismissButton = document.getElementById("dismiss__button");

/* components */

const form = document.getElementById("form");
const emailInput = document.getElementById("email");

const errorPrompt = document.getElementById("error__prompt");

/* querySelector */

/* sections */

const successMessage = document.querySelector(".message__container");
const formCard = document.querySelector(".form__card");

/* Show Success Message */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    // Show error
    errorPrompt.style.display = "block";
    emailInput.style.borderColor = "var(--red)";
    emailInput.style.color = "var(--red)";
    emailInput.style.backgroundColor = "var(--light-red)";

    emailInput.classList.add("invalid");
  } else {
    // Show Success Messsage
    successMessage.style.display = "flex";

    // To handle defferent display property for smaller screen
    formCard.classList.add("custom__hidden");
  }
});

/* Remove error prompt on clearing the input field */

emailInput.addEventListener("input", () => {
  if (errorPrompt.style.display === "block") {
    errorPrompt.style.display = "none";
    emailInput.style.borderColor = "var(--grey)";
    emailInput.style.color = "var(--blue-800)";
    emailInput.style.backgroundColor = "transparent";
    emailInput.classList.remove("error");
  }
});

/* Return to Form Card */

dismissButton.addEventListener("click", function () {
  successMessage.style.display = "none";

  // To handle defferent display property for smaller screen
  formCard.classList.remove("custom__hidden");
});

/* Check for Valid Email */

function isValidEmail(email) {
  // Email regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
