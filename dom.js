const botaoCalcular = document.querySelector('#calcular');
const titulo = document.querySelector('.page-title');




botaoCalcular.onclick = ()=> {
    titulo.innerText = "Fui clicado";
}