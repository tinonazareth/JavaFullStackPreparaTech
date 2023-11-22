let number1 = 18;
let number2 = 35;
let somaDosResulatdos = number1 + number2

console.log("A soma de " + number1 + " mais " + number2 + " é igual = " + somaDosResulatdos);

console.clear()

var str1 = 'hello';
var str2 = 'world';
var res = `${str1} ${str2}`;
console.log(res);

console.clear()

let frutas = ['maça', 'banana', 'uva', 'abacate']
console.log(frutas[3]);

console.clear()

let pessoa = {
    nome: "Valtino",
    idade: 47,
    cidade: "Mauá",
}

console.log("Dados da pessoa: ", pessoa);

console.clear()

/* Operadores Aritiméicos */
let n1 = 12;
let n2 = 4;
console.log(n1 + n2);

console.clear()

/* Operadores Relacionais*/
for (let i = 0; i < 5; i++) {
    console.count("myLabel");
}
 console.clear();
/* Operador de Concatenação*/
const nome = "Viking";

console.log(`Programador ${nome}`);

console.clear();

var array1 = ["d", "e", "v"];
var object = {a:10};
var array2 = array1.concat(object);
console.log('a:'+array2[3].a);

object.a = 99;
console.log('a:'+array2[3].a);

array2[3].a = 10;
console.log('a:'+object.a);
console.log('a:'+array2[3].a);

console.clear();

const hora = new Date().getHours(); 
let saudacao;

if (hora < 18) {
  saudacao = "Bom dia !";
} else {
  saudacao = "Boa Tarde";
}
console.log(saudacao);

console.clear();

var mes = "Maio";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");

       
}


console.clear();

var mes = 12;
var nomeMes = "";

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inexistente";
}
console.log(nomeMes);

console.clear()

