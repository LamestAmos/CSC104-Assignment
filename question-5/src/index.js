const form = document.querySelector("form");
const username = form.querySelector("#username");
const password = form.querySelector("#password");
const phoneNumber = form.querySelector("#phone-no");

const usernamePattern = /[a-zA-Z\d\-\+\.]{5,15}/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const phonePattern = /^(\+234)\d{10}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

username.addEventListener("input", (e) => {
  const feedback = e.target.parentElement.querySelector(".feedback");
  if (!e.target.value.match(usernamePattern)) {
    feedback.innerText = "Username must be within 5 and 15 characters.";
  } else {
    feedback.innerText = "";
  }
});

phoneNumber.addEventListener("input", (e) => {
  const feedback = e.target.parentElement.querySelector(".feedback");
  if (!e.target.value.match(phoneNumber)) {
    feedback.innerHTML = "Invalid Nigerian Number";
  } else {
    feedback.innerText = "";
  }
});
password.addEventListener("input", (e) => {
  const feedback = e.target.parentElement.querySelector(".feedback");
  if (!e.target.value.match(passwordPattern)) {
    feedback.innerHTML = `Invalid Password
     <div>
    Min 8 characters,
    </div>At least one uppercase letter, one digit,
     <div>
    At least one uppercase letter,
    </div> 
     <div>
    At least one digit,
    </div>
     <div>
    At least one special character,
    </div>`;
  } else {
    feedback.innerText = "";
  }
});

function validateForm() {}
