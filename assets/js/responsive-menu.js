function myFunction() {
    var x = document.getElementById("#menuNav");
    if (x.className === "cabecalho") {
      x.className += " responsive";
    } else {
      x.className = "cabecalho";
    }
  }