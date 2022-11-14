var input =document.getElementById('input')
var input2 =document.getElementById('input2')
var button =document.getElementById('button')
    cont=0
input.addEventListener('input', stop)//datos en el input activa el efecto
input2.addEventListener('input2', stop)
    function stop(){
        if(cont==0){
            button.classList.remove('body-move')//remueve la clase
            cont++
        }
        else{
            
            button.classList.add('body-move')//añade la clase 
            cont--
        }
    }

    button.onclick = () =>{
        let body = document.querySelector(`body`)
        body.classList.add(`body-move`);
    };
    