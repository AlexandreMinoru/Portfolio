const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

const email = document.getElementsByClassName("contact-item")[1];
const linkedin = document.getElementsByClassName("contact-item")[2];
const dowload = document.getElementById("dowload");

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

email.addEventListener("click", () =>{
})

linkedin.addEventListener("click", () =>{
	window.open("https://www.linkedin.com/in/alexandre-minoru/", '_blank');
})

dowload.addEventListener("click", () =>{
	console.log("deu");
})