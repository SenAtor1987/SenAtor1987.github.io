window.onscroll = function showmenu() {

  var menu  = document.querySelector(".menu");

  if(window.pageYOffset > 100) {
    menu.classList.add("menu_fixed");
  }
  else {
    menu.classList.remove("menu_fixed");
  }
}
