var datos =document.getElementById('datos');
var contrasena =document.getElementById('contrasena');
var boton =document.getElementById('boton');
    cont=0
datos.addEventListener('datos', stop);
contrasena.addEventListener('datos', stop);
    function stop(){
        if(cont==0){
            boton.classList.remove('body-move');//remueve la clase
            cont++
        }
        else{
            boton.classList.add('body-move');//añade la clase 
            cont--
        }
    }

    console.log(body-move);
