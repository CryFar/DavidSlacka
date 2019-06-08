window.onscroll = function() {
    myFunction()
};

var header = document.getElementById("header");

var navTop = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > navTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}