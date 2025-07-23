document.addEventListener("DOMContentLoaded", function () {
  // CONTACT DROPDOWN
  const contactTrigger = document.getElementById("contactTrigger");
  const contactDropdown = document.getElementById("contactDropdown");

  const followTrigger = document.getElementById("followTrigger");
  const followDropdown = document.getElementById("followDropdown");

  // Utility to toggle dropdown and position it
  function toggleDropdown(trigger, dropdown) {
    const rect = trigger.getBoundingClientRect();
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    dropdown.style.left = `${rect.left + window.scrollX}px`;
    dropdown.classList.toggle("show");
  }

  // Close all dropdowns
  function closeAllDropdowns() {
    contactDropdown.classList.remove("show");
    followDropdown.classList.remove("show");
  }

  contactTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    const isVisible = contactDropdown.classList.contains("show");
    closeAllDropdowns();
    if (!isVisible) toggleDropdown(contactTrigger, contactDropdown);
  });

  followTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    const isVisible = followDropdown.classList.contains("show");
    closeAllDropdowns();
    if (!isVisible) toggleDropdown(followTrigger, followDropdown);
  });

  contactDropdown.addEventListener("click", (e) => e.stopPropagation());
  followDropdown.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", function () {
    closeAllDropdowns();
  });

  const hamburger = document.getElementById("hamburgerBtn");
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menu = document.querySelector(".menu .wrapper");

  hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("open");

    // Disable scrolling when menu is open
    if (menu.classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
});
