

window.onload = function(){
  document.getElementById("pre-loader").style.display = "none";
  document.getElementById("banner").style.display = "block";
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
} 
window.addEventListener("scroll", reveal);

function toggleMenu(){
  const menuToggle = document.querySelector(".menuToggle");
  const mynav =  document.querySelector(".mynav");
  menuToggle.classList.toggle("active");
  mynav.classList.toggle("active");
}



