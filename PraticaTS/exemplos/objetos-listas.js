"use strict";
const pessoa = {
    nome: 'MARIANA',
    idade: 25,
    profissao: 'Desenvolvedora',
};
pessoa.idade = 25;
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora',
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["PROFESSORA"] = 0] = "PROFESSORA";
    Profissao[Profissao["ATRIZ"] = 1] = "ATRIZ";
    Profissao[Profissao["DESENVOLVEDORA_DE_SOFTWARES"] = 2] = "DESENVOLVEDORA_DE_SOFTWARES";
    Profissao[Profissao["JOGADORA_DE_FULTBOLL"] = 3] = "JOGADORA_DE_FULTBOLL";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 21,
    profissao: Profissao.DESENVOLVEDORA_DE_SOFTWARES
};
const maria = {
    nome: 'Maria',
    idade: 21,
    profissao: Profissao.DESENVOLVEDORA_DE_SOFTWARES
};
/*Enum grupo de constantes*/
const jessica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matematica Discreta', 'Programacao']
};
const monica = {
    nome: 'monica',
    idade: 28,
    materias: ['Matematica Discreta', 'Programacao']
};
function listar(lista) {
    for (const item of lista) {
        console.log('', item);
    }
}
listar(monica.materias);
