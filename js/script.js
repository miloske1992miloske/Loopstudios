
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

// Auto Text

const textEl = document.getElementById('text')
const text = 'Immersive Experiences that deliver'
let idx = 1

// setTimeout(writeText, 6000) 

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    /* if(idx > text.length) {
        idx = 1
    } */

    setTimeout(writeText, 200)
}

// Blur

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 50)

function blurring() {
	load++

	if(load > 99) {
		clearInterval(int)
		loadText.style.display = `none`
		writeText()
	}

	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }


