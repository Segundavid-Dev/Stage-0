"use strict";

const contactForm = document.querySelector(".contact-form");
const submitButton = document.querySelector(".submit-btn");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const error = document.querySelectorAll(".error");
const success = document.querySelector(".contact-success");

// email validation
function emailValidation(inputValue) {
  let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return validEmail.test(inputValue);
}

// dynamically select error class and display error content
function showError(input, message) {
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = message;
  errorEl.style.color = "red";
  input.style.borderColor = "red";
}

// dynamically clear error content
function clearError(input) {
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = "";
  input.style.borderColor = "#ccc";
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  //   full name validation
  if (fullName.value.trim() === "") {
    showError(fullName, "Full Name is required");
    isValid = false;
  } else {
    clearError(fullName);
  }

  // Email validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!emailValidation(email.value.trim())) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  } else {
    clearError(email);
  }

  // Subject validation
  if (subject.value.trim() === "") {
    showError(subject, "Subject is required");
    isValid = false;
  } else {
    clearError(subject);
  }

  // Message validation
  if (message.value.trim() === "") {
    showError(message, "Message is required");
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
    isValid = false;
  } else {
    clearError(message);
  }

  if (isValid) {
    success.textContent = "Form submitted successfully!";
    success.style.color = "green";
    contactForm.reset();
  }
});
