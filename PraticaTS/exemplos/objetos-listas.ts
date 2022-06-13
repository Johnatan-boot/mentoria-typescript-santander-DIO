const pessoa = {
    nome:'MARIANA',
    idade: 25,
    profissao: 'Desenvolvedora',
}

pessoa.idade = 25;

const paula:{nome: string, idade:number, profissao: string}={
    nome:'Paula',
    idade:25,
    profissao:'Desenvolvedora',
}

enum Profissao {
    PROFESSORA,
    ATRIZ,
    DESENVOLVEDORA_DE_SOFTWARES,
    JOGADORA_DE_FULTBOLL
}

interface Estudante extends Pessoa{
    //listas em ts lista e tipo dela em string
    materias: string[]
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao?:Profissao
}

const vanessa: Pessoa ={
    nome: 'Vanessa',
    idade:21,
    profissao: Profissao.DESENVOLVEDORA_DE_SOFTWARES
}
const maria: Pessoa ={
    nome: 'Maria',
    idade:21,
    profissao: Profissao.DESENVOLVEDORA_DE_SOFTWARES
}

/*Enum grupo de constantes*/

const jessica: Estudante = {
    nome:'Jessica',
    idade: 28,
    materias: ['Matematica Discreta', 'Programacao']
}
const monica: Estudante = {
    nome:'monica',
    idade: 28,
    materias: ['Matematica Discreta', 'Programacao']
}

function listar(lista: string[]){
    for (const item of lista) {
        console.log('',item);
        
    }
}

listar(monica.materias);