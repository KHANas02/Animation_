function playAgian() {
  var x = document.querySelectorAll(".runAnim");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.animation = "none";
  }
  setTimeout(function () {
    for (i = 0; i < x.length; i++) {
      x[i].style.animation = "";
    }
  }, 100);
}