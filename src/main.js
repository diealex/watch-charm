window.showDiv = function() {
    document.getElementById('mobile-menu').style.display = "flex";
};
window.hideDiv = function () {
    document.getElementById('mobile-menu').style.display = "none";
};
window.setActiveLink = function() {
  var current = document.getElementsByClassName("active-link");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active-link", "");
  }
  event.currentTarget.className += " active-link";
  }