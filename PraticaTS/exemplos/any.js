"use strict";
//o any nao liga muito Para Tipagem
let valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
let valorString = "naoseioquela";
valorString + valorAny;
//valorn pode ser qualquer tipo de objeto inclusive
// Objeto any vai contra o ts entrega tudo correto
let valorstring2 = "testao";
valorString = valorAny;
valorstring2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorstring2);
somarString('Olá', 'Como Vai?');
// o ANY E UM MA PRATICA NO JS GERALMENTE ULTILIZADO 
// QUANDO ESTÁ MUITO GRANDE O CODIGO.
/*
Definição de tipos e variaveis personalizadas.



*/ 
