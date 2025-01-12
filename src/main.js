window.showDiv = function() {
    document.getElementById('mobile-menu').style.display = "flex";
};
window.hideDiv = function () {
    document.getElementById('mobile-menu').style.display = "none";
};
window.setActiveLink = function(event) {
  var current = document.getElementsByClassName("active-link");
  if (current.length) { 
    current[0].classList.remove("active-link");
  }
  event.currentTarget.classList.add("active-link");
}