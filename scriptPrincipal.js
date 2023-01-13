const cambioVocales = ['ai', 'enter', 'imes', 'ober', 'ufat'];

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

function sinMayusculaYacentos(textoCadena){
  let letraAux = 0;
  let restriccion = false;
  for(let l = 0; l < textoCadena.length; l++){
    letraAux = textoCadena[l].charCodeAt(0);
    if((letraAux >= 65 && letraAux <= 90) || (letraAux >= 192 && letraAux <= 252)){
      restriccion = true;
      break;
    }
  }
  return restriccion;
}

function encriptar(){
  let textoE = document.getElementById("mensaje").value;
  if(!sinMayusculaYacentos(textoE)){
    mostrar();
    let newTextE = "";
    for(let letras of textoE){
      newTextE += devolverCadena(letras, "e");
    }
    document.getElementById("resultado").innerHTML = newTextE;
    tamanoTextarea();
  } else {
    alerta();
  }
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
    while(newTextD.includes(letras)){
      posicion = newTextD.indexOf(letras);
      textoAux = newTextD.substring(posicion, posicion + letras.length);
      caracter = devolverCadena(textoAux, "d");
      newTextD = newTextD.replace(textoAux, caracter);
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
  document.getElementById("r82").onclick = function(event) {
    if( check == false ){
      check = true;
    } else {
      check = false;
    }
    alert(check)
    event.preventDefault();
  }
});

function caracterFijado(c){
  let quitar = 0;
  if( (c >= 64 && c <= 90) || (c >= 97 && c <= 122) ){
    c = String.fromCharCode(c);
    return c + "n0";
  } else {
    if( c < 64 ){
      quitar = 64 - c;
      return "@l" + quitar.toString();
    } else if( c < 97 ){
      quitar = 97 - c;
      return "ac" + quitar.toString();
    } else {
      quitar = c - 122;
      return "zr" + quitar.toString();
    }
  }
}

function buscarNumero(cad){
  let numeros = "0123456789";
  let contarNumeros = 0;
  let contador = 0;
  let buscar = true;
  while(buscar){
    for(let num = 0; num < numeros.length; num++){
      if(cad[contador] == numeros[num]){
        contarNumeros++;
        buscar = true;
        break;
      } else {
        buscar = false;
      }
    }
    contador++;
  }
  return contarNumeros;
}

function enc(){
  mostrar();
  let textoEnc = document.getElementById("mensaje").value;
  let newTextE = "";
  let rotar = Math.floor(Math.random()*(8-2+1)+2);
  let posRotar = Math.floor(Math.random()*(9-1+1)+1);
  let pos, contAuxiliar, auxiliar;
  newTextE += rotar.toString();
  let cambiarCaracter = 0;
  for(let carct of textoEnc){
    cambiarCaracter = carct.charCodeAt(0);
    pos = "";
    contAuxiliar = 0;
    auxiliar = 0;
    for(let r = 0; r < rotar; r++){
      if(cambiarCaracter % 2 == 0){
        cambiarCaracter /= 2;
      } else {
        auxiliar = r + 97;
        pos += String.fromCharCode(auxiliar);
        contAuxiliar++;
        cambiarCaracter = cambiarCaracter * 3 + 1;
      }
    }
    contAuxiliar += 100;
    cambiarCaracter = caracterFijado(cambiarCaracter);
    newTextE += cambiarCaracter + String.fromCharCode(contAuxiliar) + pos;
  }
  newTextE += posRotar.toString();
  document.getElementById("resultado").innerHTML = newTextE;
  tamanoTextarea();
}

function des(){
  mostrar();
  let textoD = document.getElementById("mensaje").value;
  let rotar = parseInt(textoD.substring(0, 1));
  textoD = textoD.substring(1, textoD.length - 1);
  let newTextD = "";
  let continuar = true;
  let uno, dos, tres, cuatro, cinco;
  let auxiliar1 = 0, auxiliar2, lim, pasoContador, quitarCadena;
  while(continuar){
    quitarCadena = 0;
    uno = textoD.substring(0, 1);
    dos = textoD.substring(1, 2);
    if(dos == "l" || dos == "c"){
      lim = buscarNumero(textoD.substring(2));
      tres = parseInt(textoD.substring(2, 2 + lim));
      auxiliar1 = uno.charCodeAt(0) - tres;
    } else if(dos == "r") {
      lim = buscarNumero(textoD.substring(2));
      tres = parseInt(textoD.substring(2, 2 + lim));
      auxiliar1 = uno.charCodeAt(0) + tres;
    } else {
      lim = 1;
      tres = parseInt(textoD.substring(2, 2 + lim));
      auxiliar1 = uno.charCodeAt(0);
    }
    cuatro = (textoD.substring(2 + lim, 3 + lim)).charCodeAt(0);
    cuatro -= 100;
    if(cuatro != 0){
      cinco = textoD.substring(3 + lim, 3 + lim + cuatro);
    } else {
      cinco = "";
      auxiliar2 = 0;
    }
    pasoContador = cinco.length - 1;
    for(let rot = 1; rot <= rotar; rot++){
      if(pasoContador >= 0){
        auxiliar2 = rotar - (cinco[pasoContador].charCodeAt(0) - 97);
      }
      if(auxiliar2 == rot){
        auxiliar1 = (auxiliar1 - 1) / 3;
        pasoContador--;
      } else {
        auxiliar1 *= 2;
      }
    }
    newTextD += String.fromCharCode(auxiliar1);
    quitarCadena = (tres.toString()).length + cuatro + 3;
    textoD = textoD.substring(quitarCadena);
    if(textoD == ""){
      continuar = false;
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