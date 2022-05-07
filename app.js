// For menu btn
var navList = document.getElementById("nav-lists");
function Show(){
  navList.classList.add("_Menus-show");
}

function Hide(){
  navList.classList.remove("_Menus-show");
}


// For sticky Navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// For Active navbar link
var header = document.getElementById("nav-lists");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
