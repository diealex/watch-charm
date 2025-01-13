window.showDiv = function(event) {
  document.getElementById('mobile-menu').style.transform = "translateX(0)";
  document.addEventListener('click', onDocumentClick);
  event.stopPropagation();
};
window.hideDiv = function () {
  document.getElementById('mobile-menu').style.transform = "translateX(100%)";
  document.removeEventListener('click', onDocumentClick)
};
window.setActiveLink = function(event) {
  var current = document.getElementsByClassName("active-link");
  if (current.length) { 
    current[0].classList.remove("active-link");
  }
  event.currentTarget.classList.add("active-link");
}
var mobileMenu = window.document.getElementById('mobile-menu');
window.onDocumentClick = function (event) {
  if (!mobileMenu.contains(event.target)) hideDiv();
}
// made by  https://github.com/diealex