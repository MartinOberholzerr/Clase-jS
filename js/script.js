var datos =document.getElementById('datos')
var contrasena =document.getElementById('contrasena')
var boton =document.getElementById('boton')
    cont=0
datos.addEventListener('datos', stop)//datos en el input activa el efecto
contrasena.addEventListener('datos', stop)
    function stop(){
        if(cont==0){
            boton.classList.remove('body-move')//remueve la clase
            cont++
        }
        else{
            
            boton.classList.add('input-Clave')//añade la clase 
            cont--
        }
    }
