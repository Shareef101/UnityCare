// ==================================== hamburger ================================

document.addEventListener("DOMContentLoaded", function() {

  const button = document.querySelector(".hamburger-button-on");
  const buttonClose = document.querySelector(".button-close");
  const myDiv = document.querySelector(".overlay");

  button.addEventListener("click", function() {
    myDiv.style.display = "block";
    myDiv.style.top = "45px"; 
    button.style.display = "none";
    buttonClose.style.display = "block";
  });

  buttonClose.addEventListener("click", function() {
    myDiv.style.display = "none";
    buttonClose.style.display = "none";
    button.style.display = "block";
  });

  window.addEventListener('resize', function() {
    if(window.innerWidth > 1080 && myDiv.style.display === 'block') {
      buttonClose.click();
    }
  });

});



//===================================== accordion ===========================

document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function(item) {
      const button = item.querySelector(".accordion-btn");
      const content = item.querySelector(".accordion-content");

      button.addEventListener("click", function() {
          content.classList.toggle("active");

          if (content.classList.contains("active")) {
              content.style.display = "block";
          } else {
              content.style.display = "none";
          }
      });
  });
});




//===================================== navbar ============================
  
function toggleDropdown(dropdownId) {

  // Get reference to target dropdown 
  const dropdown = document.getElementById(dropdownId);

  // If dropdown does not exist, exit
  if(!dropdown) {
    return; 
  }

  // Check if dropdown has show class
  const isShown = dropdown.classList.contains('show');
  
  // Loop through dropdowns and remove show class
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(d => {
    if(d.id !== dropdownId) {
      d.classList.remove('show'); 
    }
  });

  // Toggle show class on target dropdown
  if(isShown) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }

}
