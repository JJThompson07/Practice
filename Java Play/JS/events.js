
// var numOne = document.getElementById('num-one');
// var numTwo = document.getElementById('num-two');
// var addSum = document.getElementById('add-sum');

// numOne.addEventListener("input",add);
// numTwo.addEventListener("input",add);

// function add() {
// 	var one = parseFloat(numOne.value) || 0;
// 	var two = parseFloat(numTwo.value) || 0;
// 	var sum = one+two;
// 	addSum.innerHTML = "your sum is:"+sum;
// }

// end of code for listeners

var lolas = document.getElementById("lolas");
var lolasPic = document.getElementById("lolas-pic");
var pool = document.getElementById("pool");
var poolPic = document.getElementById("pool-pic");
var beer = document.getElementById("beer");
var beerPic = document.getElementById("beer-pic");

// lolas.addEventListener("click", function() {
// 	if (lolasPic.className === "hide") {
// 		lolasPic.className = "";
// 	} else {
// 		lolasPic.className = "hide";
// 	}

// });

// pool.addEventListener("click", function() {
// 	if (poolPic.className === "hide") {
// 		poolPic.className = "";
// 	} else {
// 		poolPic.className = "hide";
// 	}

// });

// beer.addEventListener("click", function() {
// 	if (beerPic.className === "hide") {
// 		beerPic.className = "";
// 	} else {
// 		beerPic.className = "hide";
// 	}

// });

// however this is lots of repeating code (messy)
//  DONT REPEAT YOURSELF

lolas.addEventListener("click", picLink);
pool.addEventListener("click", picLink);
beer.addEventListener("click", picLink);

function picLink(){
	var allImages = document.querySelectorAll("img");

	for (var i = 0; i< allImages.length; i++) {
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
	console.log(picId);
	var pic = document.getElementById(picId);
	if(pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}









