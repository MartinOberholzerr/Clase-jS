let usuario = document.getElementById('#datos');
let contrasena = document.getElementById('#contrasena');
let boton = document.getElementById('#boton');
    cont=0;
    
    function inicio(){
        document.getElementById("datos").addEventListener('click',usuario);
    }

    function usuario(){
        let body = document.activeElement.id;
        body.classList.remove(`active`);
    }