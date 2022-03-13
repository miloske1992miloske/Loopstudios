
const menuBtn = document.getElementById('menu-btn')
const sideNav = document.getElementById('side-nav')
const menu = document.getElementById('menu')

sideNav.style.top = '-100%';

menuBtn.addEventListener('click', mobileMenu) 

function mobileMenu() {
	if (sideNav.style.top == '-100%') {
		sideNav.style.top = '0';
		menu.src = 'img/icon-close.svg'
	} else {
		sideNav.style.top = '-100%';
		menu.src = 'img/icon-hamburger.svg'
	}
}
