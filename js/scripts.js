// plik scripts.js

var button = document.getElementsByClassName('button');


function getText(element) {
	alert(element.innerText);

}

// getText(button[0]);

for ( var i = 0 ; i < button.length ; i++) {
	// button[i].onclick = function (e) { //nadpisuje narzucone eventy
	// 	alert(1);
	// };

	button[i].addEventListener("click",	function(event) { //dodaje funkcje
		// console.log(event);
		getText(this);
	}, false);
}