
var menuBtn = document.getElementById('menu-btn')
var sideNav = document.getElementById('side-nav')
var menu = document.getElementById('menu')

sideNav.style.top = '-100%';

menuBtn.onclick = function() {
	if (sideNav.style.top == '-100%') {
		sideNav.style.top = '0';
		menu.src = 'img/icon-close.svg'
	} else {
		sideNav.style.top = '-100%';
		menu.src = 'img/icon-hamburger.svg'
	}
}