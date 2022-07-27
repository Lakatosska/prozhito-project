const checkbox = document.querySelector('.menu__checkbox');
const header = document.querySelector('.header');
const linkDropdownMenu = document.querySelector('.menu__link_open-submenu');
const menuDropdown = document.querySelector('.menu__mobile-links-section_dropdown');

function removeClass(elem, className) {
  elem.classList.remove(className);
  return;
}

function addClass(elem, className) {
  elem.classList.add(className);
  return;
}

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    addClass(header, 'header_mobile-menu')
    return;
	}
	removeClass(header, 'header_mobile-menu')
});

window.addEventListener('resize', evt => {
  if (evt.target.innerWidth > 767) {
    checkbox.checked = false;
    removeClass(header, 'header_mobile-menu')
  }
})

linkDropdownMenu.addEventListener('mouseover', () => {
  menuDropdown.classList.remove('menu__mobile-links-section_closed');
})

menuDropdown.addEventListener('mouseleave', () => {
  addClass(menuDropdown, 'menu__mobile-links-section_closed')
})
