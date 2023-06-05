const listaTeclas = document.querySelectorAll('input[type=button]');

function valorBotaoUm (){ 
    alert(listaTeclas[0].value);
}

listaTeclas[0].onclick = valorBotaoUm;