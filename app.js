
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = "ingrese número del 1 al 9";

let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto";
*/

let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto)
    

    console.log(intentos);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste en ${intentos} ${intentos == 1 ? 'vez':'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listasNumerosSorteados); 
    //si ya sorteamos todo los numeros
    if(listasNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los números');
    
    } else{
        // si el num generado esta incluido en la lista
    if(listasNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); 
    }else{
        listasNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
    }

    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `ingrese número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto( );
    intentos = 1;
}



function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar el numero aleatorio
    condicionesIniciales();
    //intentos
    //dehabilitar el boton denuevo
    document.querySelector('#reiniciar').setAttribute('disabled','True');
}
condicionesIniciales();

/*
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
  let busqueda = encontrarIndiceElemento(lenguagesDeProgramacion,"JavaScript");
  console.log(busqueda); */