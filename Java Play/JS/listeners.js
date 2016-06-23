
var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var addSum = document.getElementById('add-sum');

var one = parseFloat(numOne.value)
var two = parseFloat(numTwo.value)

numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML=one+two;
}

