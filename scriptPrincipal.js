var cambioVocales = ['ai', 'enter', 'imes', 'ober', 'ufat'];

function devolverCadena(letra, tipo){
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  let guardar = letra;
  for(let opciones = 0; opciones < 5; opciones++){
    if(letra == vocales[opciones] && tipo == "e"){
      guardar = cambioVocales[opciones];
      break;
    }
    if(letra == cambioVocales[opciones] && tipo == "d"){
      guardar = vocales[opciones];
      break;
    }
  }
  return guardar;
}

function encriptar(){
  mostrar();
  let textoE = document.getElementById("mensaje").value;
  let newTextE = "";
  for(let letras of textoE){
    newTextE += devolverCadena(letras, "e");
  }
  document.getElementById("resultado").innerHTML = newTextE;
  tamanoTextarea();
}

function desencriptar(){
  mostrar();
  let textoD = document.getElementById("mensaje").value;
  let newTextD = textoD;
  let posicion = 0;
  let caracter = "";
  let textoAux = "";
  let cambiar = true;

  for(let letras of cambioVocales){
    console.log(newTextD.includes(letras));
    while(newTextD.includes(letras)){
      posicion = newTextD.indexOf(letras);
      textoAux = newTextD.substring(posicion, posicion + letras.length);
      caracter = devolverCadena(textoAux, "d");
      newTextD = newTextD.replace(textoAux, caracter);
      console.log("jeje");
    }
  }
  document.getElementById("resultado").innerHTML = newTextD;
  tamanoTextarea();
}

function copiar(){
  let textoCopiado = document.querySelector("#resultado");
  textoCopiado.select();
  document.execCommand("copy");
}

//r-82
var check = false;
window.addEventListener('load', function() {
  console.log('La página ha terminado de cargarse!!');
  document.getElementById("r-82r").onclick = function(event) {
    if( check == false ){
      check = true;
    } else {
      check = false;
    }
    alert(check)
    event.preventDefault();
  }
});


function enc(){
  mostrar();
  let textoEnc = document.getElementById("mensaje").value;
  let newTextE = "";
  let rotar = Math.floor(Math.random()*(8-2+1)+2);
  let posRotar = Math.floor(Math.random()*(8-2+1)+2);
  let pos;
  newTextE += posRotar.toString();
  let cambiarCaracter = 0;
  for(let carct of textoEnc){
    cambiarCaracter = carct.charCodeAt(0);
    pos = "";
    for(let r = 0; r < rotar; r++){
      if(cambiarCaracter % 2 == 0){
        cambiarCaracter /= 2;
      } else {
        pos += r.toString();
        cambiarCaracter = cambiarCaracter * 3 + 1;
      }
    }
    console.log(pos);
    console.log(carct + cambiarCaracter);
    cambiarCaracter = String.fromCharCode(cambiarCaracter);
    console.log(cambiarCaracter);
  }
  console.log(rotar);
  
  //document.getElementById("resultado").innerHTML = newTextE;
  tamanoTextarea();
}

function des(){
  mostrar();
  let textoD = document.getElementById("mensaje").value;
  let newTextD = textoD;
  let posicion = 0;
  let caracter = "";
  let textoAux = "";
  let cambiar = true;

  for(let letras of cambioVocales){
    console.log(newTextD.includes(letras));
    while(newTextD.includes(letras)){
      posicion = newTextD.indexOf(letras);
      textoAux = newTextD.substring(posicion, posicion + letras.length);
      caracter = devolverCadena(textoAux, "d");
      newTextD = newTextD.replace(textoAux, caracter);
      console.log("jeje");
    }
  }
  document.getElementById("resultado").innerHTML = newTextD;
  tamanoTextarea();
}

function opciones(opc){
  if(opc == "e" && !check){
    encriptar();
  } else if(opc == "d" && !check){
    desencriptar();
  } else if(opc == "e" && check){
    enc();
  } else {
    des();
  }
}