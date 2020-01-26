
var a = ".img1";
var b = ".img2";
var rand = "";

function randImg(a){
	rand = Math.floor(Math.random()*6) + 1;
	var imgs = document.querySelector(a);
	ss = "./images/dice" + rand + ".png";
	imgs.setAttribute("src",ss);
	return rand;
}

a = randImg(a);
b = randImg(b);

if( a == b){
	document.querySelector("h1").innerHTML = "Draw";
}
if( a > b){
	document.querySelector("h1").innerHTML = "Player 1 Win";
}
if( a < b){
	document.querySelector("h1").innerHTML = "Player 2 Win";
}














// var b = Math.floor(Math.random()*6) + 1;

// if(a >== b ) {
// 	 var h1 = document.querySelector("h1");
// 	 h1.innerHTML = "Player 1 wins";
// }
// else 
// 	{
// 		if(a <== b){
// 		 var h3 = document.querySelector("h1");
// 	 	 h3.innerHTML = "Player 2 wins";
// 	}
// 	else {
// 		 var h2 = document.querySelector("h1");
// 		 h2.innerHTML = "Draw";
// 	}
// }