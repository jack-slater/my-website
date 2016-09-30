$(document).ready(function() {
	$('h1').click(function() {
		console.log('clicked');
	});
var spider = document.getElementById('spider');
var beforeP = document.getElementById('before');
var afterP = document.getElementById('after');

var question = function() {
	
}

var clickPic = function() {
	spider.src = 'peterparker.png';
	beforeP.style.visibility = 'hidden';
	afterP.style.visibility = 'visible';
	
};
spider.addEventListener('click',clickPic, false);
});