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

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Project Links
$("#niteowl").on("click", function() {
  window.location.href =
    "https://olsenben77.github.io/D8-Nite---Ben-Henry-Lloyd-Owen/";
});

$("#weather").on("click", function() {
  window.location.href = " https://ohhhhhwhen.github.io/6-Weather-Dashboard/";
});

$("#quiz").on("click", function() {
  window.location.href = " https://ohhhhhwhen.github.io/4-Code-Quiz/";
});

$("#password").on("click", function() {
  window.location.href = "https://ohhhhhwhen.github.io/3-Password-Generator/";
});

$("#day").on("click", function() {
  window.location.href = "https://ohhhhhwhen.github.io/5-Day-Planner/";
});
