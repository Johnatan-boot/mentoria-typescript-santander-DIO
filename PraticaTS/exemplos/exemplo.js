"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase;
frase = "O valor é: ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
/*Porque usar TS? Adicionar definição estatica de
Tipos:
Funcionalidades do Codigo mais explicitas;
Maior Segurança durante o Desenvolvimento;
Detecta Erros Durante a Compilação que Só
seriam  percebiveis em execução
compila um js mais resiliente;
Ajuda Desenvolver Boas Praticas de Programação

Features
NODE.JS
Ts
vsCode


relacao entre variaveis e tipos


Objeto enum interface


any =>


*/
