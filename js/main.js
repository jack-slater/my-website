$(document).ready(function() {

var spider = document.getElementById('spider');
var beforeP = document.getElementById('before');
var afterP = document.getElementById('after');


var clickPic = function() {
	spider.src = 'peterparker.png';
	beforeP.style.visibility = 'hidden';
	afterP.style.visibility = 'visible';
};
spider.addEventListener('click',clickPic, false);

});



