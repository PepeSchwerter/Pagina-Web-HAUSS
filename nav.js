let links = document.querySelectorAll(".nav ul li a");
links.forEach(l => l.addEventListener("click", e => {
  if (window.innerWidth <= 1000){
    var x = document.querySelector(".nav ul");
    x.style.display = "none";
  }
}));

function myFunction() {
    var x = document.querySelector(".nav ul");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }