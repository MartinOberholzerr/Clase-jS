// variables
const muestra = document.getElementById("muestra");

//functions
function addElemento(datos){
    var muestra = document.getElementById ("muestra");
    var p = document.createElement('p');
    p.innerHTML = datos;
    muestra.appendChild (p);
}