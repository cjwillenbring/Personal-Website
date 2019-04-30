/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.borderLeft = "1px solid white";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.borderLeft = "none";
}

function openLinksBar() {
  document.getElementById("personalLinks").style.left = "0";
} 

function closeLinksBar() {
	document.getElementById("personalLinks").style.left = "300px";
}

function colorFull() {
	document.getElementById("mePic").style.filter = "grayscale(0)";
}
