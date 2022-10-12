const h1 = document.querySelector('h1');
const input_1 = document.querySelector('#calculo-1');
const input_2 = document.querySelector('#calculo-2');
const label_1 = document.querySelector('#label-1');
const label_2 = document.querySelector('#label-2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#id-resultado');


btn.addEventListener('click', btn_oprimido);

function btn_oprimido(){

    resultado.classList.remove('class-resultado');
    resultado.innerHTML = '';
    let respuesta = Number(input_1.value) + Number(input_2.value);
    if(respuesta){
        resultado.classList.add('class-resultado');
        resultado.innerHTML = respuesta;
    }
    
}