/*let showMyMenu = function () {
	let $ = jQuery;
	$('.my-navbar button.toggle').on('click',(e)=>{
	console.log('okey');
	e.preventDefault() //предотвращает стандартное ивент событие кнопки button
	$('nav.nav-menu').toggleClass('active-out');
})
}
showMyMenu();

*/
let buttonMenu = document.querySelector('.navbar-toggle');
let menuToggle = document.querySelector('nav.nav-menu');
console.log(buttonMenu);
console.log(menuToggle);
buttonMenu.addEventListener('click', ()=>{
menuToggle.classList.toggle('active-out')
console.log('okey');
});
