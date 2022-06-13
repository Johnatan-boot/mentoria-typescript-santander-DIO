/*
function soma(a: number, b:number){
    return a + b;
}



/*
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'Aquatico';
    executarRugido(alturaEmDecibeis: number):void;
}


*/
/*
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'Aquatico';
    domestico: boolean;
   //executarRugido(alturaEmDecibeis: number):void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;

}

interface ICanino extends IAnimal{
   porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte:'medio',
    tipo: 'terrestre',

}
*/

/*
animal.executarRugido('s')
const felino: IFelino = {
 nome: 'Leão',
 tipo: 'terrestre',
 visaoNoturna: true,
}

interfaces para definir contratos estruturas de classes
typos juncoes merges das interfaces para Ultilizarmos ela no nosso codigo


*/

/*

interfaces
types => similar ao structs em liguagem c são contratos para
implementar as classes


*/

const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event)=>{
const i = event.currentTarget as HTMLInputElement;
console.log(i.value);
});



/*
Generic Types => Rprresentam uma maneira cirar paramentros para classse
e definir tipos que podem ser substituidos em varios lugares do programa
eliminando p isp da classe object para definirmos tipos variaveis


function preencheLista<NaoSei>(array: any[], valor: NaoSei){
return array.map(item=> item + valor);

}

preencheLista([1,2,3], 1);

como vou tipar os dados
*/


function preencheLista<T>(array: any[], valor: T){
    return array.map(() => valor);
    
    }
    
    preencheLista([1,2,3], 2);


    /*
    condicionais apartir de Parametros

   interface IUsuario{
        id: string;
        email: string;
        
    }
    
    interface IAdmin extends IUsuario{
       cargo: 'gerente' | 'Coordenador' | 'Supervisor';
       

    }
    

    function redirecione(usuario: IUsuario | IAdmin  ){
    //Verificacao de Cargo
    if ('cargo' in usuario) {
       //redirecionar para a area de administração

    }

    //redirecionar para area de Usuario
   

    }

    o carater ? para variaveis opcionais
   ? torna um dado opcional pode ou nao estar definido

interface IUsuario{
        id: string;
        email: string;
        cargo?: 'gerente'| 'coordenador'| 'supervisor'| 'funcionario';
        
    }

    function redirecione(usuario:IUsuario){
       if(usuario.cargo){
        //redirecionar(usuario.cargo);

       }

       //redirecionar Para Area do Usuario

    }


    criando variaveis com propriedades reandonly e private


    interface Cachorro{
        readoly nome: string;
        readoly idade: number;
        readoly parqueFavorio?: string;
    }

 class MeuCachorro implements Cachorro{
    
    idade;
    nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
 }

 const cao = new MeuCachorro('Apolo', 14);
 cao.idade = 8;
 
 console.log(cao);
    
    
    */
    

 interface Cachorro{
     nome: string;
     idade: number;
     parqueFavorio?: string;
}


//Iterando todos os Itens e dizendo que será de Leitura
type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements Cachorro{

idade;
nome;
parqueFavorio;

constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
}


/*
importando bibliotecas sem mecher nos types

interface Estudante {
    nome: string;
    idade: number;

}

interface Estudante{
    serie: string;
}

const estudante: Estudante ={

}






*/
import $ from 'jquery';

$.fn.extend({
novaFuncao(){
    console.log('Chmando Nova Função');
}
});

$('body').novaFuncao();


export const numero = 2;


/*
interface Pessoa {
    nome:string;
    idade: number;
    nacionalidade: string;
}


interface Brasileiro extends Pessoa Omit<Pessoa, 'nacionalidade'>{

}

const brasileiro: Brasileiro = {

}




*/