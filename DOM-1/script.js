const h1 = document.querySelector('h1');

// const p = document.querySelectorAll('p');

//document.querySelector('') --------------------------
//retorna primer elemento. formato CSS 'element' '.class' '#id' 
const p = document.querySelector('p'); // p

//document.querySelectorAll('')------------------------
//retorna lista los elementos classes y id's del elemento
//const p = document.querySelectorAll('p'); [p, p.class, p#id]

//document.getElementsByClassName('')----------
//document.getElementById('')------------------
//retorna la clase/id. busca solo por nombre sin formato CSS 

const p_class = document.querySelector('.p-class');
const p_id = document.getElementById('p-id');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    p_class,
    input,
});

h1.innerHTML = 'Modificación de H1 <br> desde Document';
h1.getAttribute('class'); //verde
h1.setAttribute('class','rojo'); // <- rojo
h1.classList.add('size');
h1.classList.remove('rojo');

input.value = 'Reescribir';


console.log(document.createElement('div'));
//h1.classList.contains('buscar');
//h1.classList.toggle('eventos');

const img = document.createElement('img');

//img.src = 'https://images.pexels.com/photos/13569929/pexels-photo-13569929.jpeg'

img.setAttribute('src','https://images.pexels.com/photos/13569929/pexels-photo-13569929.jpeg');
img.setAttribute('class','size');

console.log(img);
p_id.innerHTML = '';
p_id.append(img);