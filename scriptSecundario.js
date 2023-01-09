var elemento1 = document.getElementById("conResultado");
var elemento2 = document.getElementById("sinResultado");

//elemento1.style.display = "none";

function mostrar(){
	elemento1.style.display = "flex";
	elemento2.style.display = "none";
}

function tamanoTextarea(){
	let textArea = document.getElementById("resultado");
	textArea.style.height = "30vh";
}
