/* ==============================
   validation.js
   Handles Client-Side Validation
   ============================== */

// Registration Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const category = document.getElementById("category").value.trim();

  if (name === "" || email === "" || phone === "" || category === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Name should contain only letters.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Enter a valid email address.");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return false;
  }

  alert("Registration submitted successfully!");
  return true;
}

// Contact Form Validation
function validateContactForm() {
  const cname = document.getElementById("cname").value.trim();
  const cemail = document.getElementById("cemail").value.trim();
  const message = document.getElementById("message").value.trim();

  if (cname === "" || cemail === "" || message === "") {
    alert("Please complete all fields.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cemail)) {
    alert("Enter a valid email address.");
    return false;
  }

  alert("Your message has been sent successfully!");
  return true;
}
