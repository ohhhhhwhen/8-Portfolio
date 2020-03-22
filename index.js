//Stop Jump
function stopFunction() {
  setTimeout(function() {
    $("#jump").removeClass("noJump");
    $("#l1").removeClass("noJump");
    $("#l2").removeClass("noJump");
    $("#l3").removeClass("noJump");
    $("#l4").removeClass("noJump");
    $("#l5").removeClass("noJump");
    $("#l6").removeClass("noJump");
    $("#l7").removeClass("noJump");
    $("#l8").removeClass("noJump");
    $("#l9").removeClass("noJump");
    $("#l10").removeClass("noJump");
    $("#l11").removeClass("noJump");
    $("#l12").removeClass("noJump");
    $("#l13").removeClass("noJump");
  }, 5000);
}
stopFunction();

//Sticky Navbar
window.onscroll = function() {
  stickyNav();
};


var navbar = document.getElementById("navIcon");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//SideNav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("navIcon").classList.add("hide");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navIcon").classList.remove("hide");

}

//Project Links
$("#niteowl").on("click", function() {
  window.location.href =
    "https://olsenben77.github.io/D8-Nite---Ben-Henry-Lloyd-Owen/";
});

$("#weather").on("click", function() {
  window.location.href = "https://ohhhhhwhen.github.io/Location-Weather/";
});

$("#quiz").on("click", function() {
  window.location.href = "https://ohhhhhwhen.github.io/Class-Quiz/";
});

$("#password").on("click", function() {
  window.location.href = "https://ohhhhhwhen.github.io/Generate-My-Password/";
});

$("#day").on("click", function() {
  window.location.href = "https://ohhhhhwhen.github.io/Work-Day-Scheduler/";
});

// EMail Me
function mailme(){
  window.location.href = "mailto:owenchanthala@gmail.com";
}
// linkedin
function lkIn(){
  window.location.href = "https://www.linkedin.com/in/owen-chanthala/";
}
// GitHub
function mygithub(){
  window.location.href = "https://github.com/ohhhhhwhen";
}
// niteOwlGit
function niteOwlGitRepo(){
  window.location.href = "https://github.com/Olsenben77/D8-Nite---Ben-Henry-Lloyd-Owen";
}
// niteOwlDeploy
function niteOwlDeploy(){
  window.location.href = "https://olsenben77.github.io/D8-Nite---Ben-Henry-Lloyd-Owen/";
}
// weatherGit
function weatherGitRepo(){
  window.location.href = "https://github.com/ohhhhhwhen/Location-Weather";
}
// weatherDeploy
function weatherDeploy(){
  window.location.href = "https://ohhhhhwhen.github.io/Location-Weather/";
}
// passwordGit
function quizGitRepo(){
  window.location.href = "https://github.com/ohhhhhwhen/Class-Quiz";
}
// weatherDeploy
function quizDeploy(){
  window.location.href = "https://ohhhhhwhen.github.io/Class-Quiz/";
}
// passwordGit
function passwordGitRepo(){
  window.location.href = "https://github.com/ohhhhhwhen/Generate-My-Password";
}
// weatherDeploy
function passwordDeploy(){
  window.location.href = "https://ohhhhhwhen.github.io/Generate-My-Password/";
}
// burgerGit
function burgerGitRepo(){
  window.location.href = "https://github.com/ohhhhhwhen/Burger";
}
// burgerDeploy
function burgerDeploy(){
  window.location.href = "https://burgers-devoured.herokuapp.com/";
}
// virusGit
function virusGitRepo(){
  window.location.href = "https://github.com/Olsenben77/Project-2";
}
// virusDeploy
function virusDeploy(){
  window.location.href = "https://project2-remy-owen-ben.herokuapp.com/";
}
// button scroll
function scrolldown(){
  window.location.href = "#me-section";
}