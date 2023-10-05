const form = document.getElementById("form");
const input = document.querySelector("input");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Please provide a valid email";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailRegex.test(input.value)) {
    form.classList.add("error");
    errorIcon.style.display = "block";
    form.insertAdjacentElement("afterend", errorMessage);
  } else {
    form.classList.remove("error");
    errorIcon.style.display = "none";
    errorMessage.remove();
  }
});
