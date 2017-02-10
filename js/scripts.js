// plik scripts.js

var button = document.getElementsByClassName('button');

for ( var i = 0 ; i <= button.lenght ; i++) {
	function getText() {
		alert(button.innerText);

	}
}
console.log(button.innerText);