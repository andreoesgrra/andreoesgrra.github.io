/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.height = "95px";
  document.getElementById("nav-button").style.border = "1px solid lightgrey";
  let button = document.getElementsByClassName("menu-icon");
  for (var i=0; i < button.length; i++) {
    button[i].style.backgroundColor = "lightgrey";
  }
  document.getElementById("nav-button").setAttribute("onclick", "closeNav()");
  //document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.height = "0";
  document.getElementById("nav-button").style.border = "1px solid black";
  let button = document.getElementsByClassName("menu-icon");
  for (var i=0; i < button.length; i++) {
    button[i].style.backgroundColor = "black";
  }
  document.getElementById("nav-button").setAttribute("onclick", "openNav()");
  //document.getElementById("main").style.marginLeft = "0";
}
