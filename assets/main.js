// Function to get current year and update the footer
function updateCurrentYear() {
  const currentYear = new Date().getFullYear();
  const dateElement = document.getElementById("date");
  if (dateElement) {
    dateElement.textContent = currentYear;
  }
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", updateCurrentYear);
