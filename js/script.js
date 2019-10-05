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


document.addEventListener('DOMContentLoaded',()=>{
	console.log('ContentLoaded')
	let buttonMenu = document.querySelector('.navbar-toggle');
	let menuToggle = document.querySelector('nav.nav-menu');
	console.log(buttonMenu);
	console.log(menuToggle);
	buttonMenu.addEventListener('click', ()=>{
		menuToggle.classList.toggle('active-out')
		console.log('okey');
	});
	function closeOnClick (){
		menuToggle.addEventListener('click',()=>{
			menuToggle.classList.remove('active-out')
			console.log('class removed')
		})
	}
	closeOnClick()
})
$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Back to top">Back to top</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});