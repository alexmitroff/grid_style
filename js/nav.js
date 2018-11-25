var global_scroll_position = 0;

function showNavbar(){
  let scroll_position = window.pageYOffset,
      show_navbar = global_scroll_position < scroll_position,
      navbar = document.querySelector("body > header");
  if ( window.offsetWidth > 840 ){
    show_navbar = !show_navbar;
  }

  if ( show_navbar ) {
    navbar.classList.remove('show');
  } else {
    navbar.classList.add('show');
  }

  global_scroll_position = scroll_position;
}
