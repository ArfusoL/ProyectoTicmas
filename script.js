

//Descarga
var boton = document.getElementById("download");
var contador = 15;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = " 15 segundos para descargar";
var id;

boton.parentNode.replaceChild(etiqueta, boton);
function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + " segundos para descargar";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;

//Habilidades
function animar (){
 document.getElementById("barra").classList.toggle ("final");
}

   document.getElementById("boton").onclick = function (){
   animar();
}



