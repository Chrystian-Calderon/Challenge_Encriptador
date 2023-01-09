let modo = document.querySelector("#switch");
let body1 = document.body;
let body2 = document.getElementById("body2");

modo.addEventListener("click", function(){
	body1.classList.toggle("darkMode");
	let val = body2.classList.toggle("dark");
	localStorage.setItem("modo", val);
})

let valor = localStorage.getItem("modo");

if(valor == "true"){
	body1.classList.add("darkMode");
	body2.classList.add("dark");
} else {
	body1.classList.remove("darkMode");
	body2.classList.remove("dark");
}