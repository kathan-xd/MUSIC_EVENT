/* ==========================
   ADMIN PANEL JAVASCRIPT
   ========================== */

// Initialize AOS animations
document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({ duration: 900, once: true });
  }
});

/* ---------- Form Validation ---------- */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");
    let valid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("is-invalid");
        valid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill all required fields ❌");
    }
  });
}

/* ---------- Forgot Password Logic ---------- */
function setupForgotPassword() {
  const sendOtpBtn = document.getElementById("sendOtpBtn");
  const verifyOtpBtn = document.getElementById("verifyOtpBtn");
  const resetForm = document.getElementById("resetForm");
  let generatedOtp = "";

  if (!sendOtpBtn || !verifyOtpBtn || !resetForm) return;

  sendOtpBtn.addEventListener("click", () => {
    const email = document.getElementById("resetEmail").value.trim();
    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    alert("OTP sent to " + email + " ✅ (Demo OTP: " + generatedOtp + ")");

    document.getElementById("step1").classList.add("d-none");
    document.getElementById("step2").classList.remove("d-none");
  });

  verifyOtpBtn.addEventListener("click", () => {
    const otpInput = document.getElementById("otpInput").value.trim();
    if (otpInput === generatedOtp) {
      alert("OTP verified ✅");
      document.getElementById("step2").classList.add("d-none");
      document.getElementById("step3").classList.remove("d-none");
    } else {
      alert("Incorrect OTP ❌");
    }
  });

  resetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPass = document.getElementById("newPass").value.trim();
    const confirmPass = document.getElementById("confirmPass").value.trim();

    if (newPass.length < 6) {
      alert("Password must be at least 6 characters long.");
    } else if (newPass !== confirmPass) {
      alert("Passwords do not match ❌");
    } else {
      alert("Password reset successfully ✅");
      location.reload();
    }
  });
}

/* ---------- Table Actions (optional) ---------- */
function setupTableActions() {
  const deleteButtons = document.querySelectorAll(".btn-danger");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this record?")) {
        btn.closest("tr").remove();
        alert("Deleted successfully ✅");
      }
    });
  });
}

// Call setup functions globally
setupForgotPassword();
setupTableActions();
