var textInput = document.querySelector("#input-txt");
var outInput = document.querySelector("#output");


function criptografar() {

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")


  document.getElementById('output').innerHTML = '<textarea readonly id="input-txte">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {

  var texto = textInput.value;

  var resultDescripto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

  document.getElementById('output').innerHTML = '<textarea readonly id="input-txte">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
  let copyText = document.querySelector("#input-txte");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

