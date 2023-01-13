var elemento1 = document.getElementById("conResultado");
var elemento2 = document.getElementById("sinResultado");

//elemento1.style.display = "none";

function mostrar(){
	elemento1.style.display = "block";
	elemento2.style.display = "none";
}

function tamanoTextarea(){
	let textArea = document.getElementById("resultado");
	if(screen.width > 800){
		textArea.style.height = "76%";
	} else {
		textArea.style.height = "200px";
	}
}

function alerta(){
	let mensajeAlerta = document.getElementById("alerta");
	mensajeAlerta.style.display = "block";
	setTimeout(function(){
		mensajeAlerta.style.display = "none";
	}, 3000);
}
