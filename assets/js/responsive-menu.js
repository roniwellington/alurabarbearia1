function myFunction() {
    var x = document.getElementById("#menuNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }