// criação e referencia dos valores usados
let display = document.getElementById('display')
let expressao = "0";
let aspas = 0;
let historico = [];

// apagar o ultimo valor digitado
const apagar = () => {
    if (expressao.length > 1){
        expressao =  expressao.substring(0, expressao.length -1); 
    }else{
        expressao = 0; // voltando a ZERO se expressão estiver vazia.
    }
    display.innerHTML = expressao; // Atualização de Display
}

// Limpando a espre
const limpar = () => { 
    expressao = 0; 
    display.innerHTML = expressao; // atualizando o display
}

// adicionando numeros ao display
const numero = (num) => { 
    if (expressao == 0){
        expressao = num;
    }else{
        expressao += num; 
    }
    display.innerHTML = expressao; // atualizando o display
}

// adicionando operador se o display não estiver vazio
const operador = (operador) => {
    if (expressao !== 0){ 
        expressao += operador;
    }
    display.innerHTML = expressao; // atualizando o display
}

// abrindo as aspas
const aAspas = () =>{
    if (expressao == 0){ 
        expressao = "(";
    }else{
        expressao += "*(";
    }
    aspas += 1; // Aumentando o numero de aspas abertas
    display.innerHTML = expressao; // atualizando o display
}

// Fecha aspas caso estejam abertas
const fAspas = () =>{
    if (aspas > 0){ 
        expressao += ")*";
        aspas -= 1; // diminuindo o numero de aspas abertas
    }
    display.innerHTML = expressao; // atualizando o display
}

 // calculando o resultado
const calcular = () => {
    let resultado = eval(display.innerHTML);
    historico[historico.length] = (expressao+" = "+resultado); // salvando a conta
    expressao = 0; // limpando o display
    console.log(historico); // exibindo o historico no console
    display.innerHTML = resultado; // inserindo o resultado no display
}
