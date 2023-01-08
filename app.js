function mostrar(){
	document.getElementById('general8').style.display='block';
}

function ocultar(){
	document.getElementById('general8').style.display='none';
}

//formulario


function enviar(){
    let name= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let genero= document.getElementById('genero').value;

    document.getElementById('respuesta').innerHTML=name+" + "+email+" + "+genero;

}