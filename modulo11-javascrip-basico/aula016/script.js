//Objetos e suas propriedades
//Em um objeto pode conter qualquer um dos tipos de variaveis já que suas propriedades funcionam como uma e eu posso adicionar novas propriedades depois de ter  criado o objeto fora dela, elas são separadas por vírgulas e dois pontos; 

//forma de criar um objeto
var objetoVazio = new Object()
console.log(objetoVazio);

//forma simples 

var alunos = {
    nome: 'João',
    notas: [10.0, 9.0],
}   

//Formas diferentes de ver a mesma coisa.
console.log(alunos.notas[0]);
console.log(alunos['notas'][0]);
console.log(alunos.nome)

//Adiciona coisas novas nesse objeto

alunos.matricula = 2022890;

//Fazendo assim só precisa muda o nome do valor da variavel que vai mudar direto no resultado sem precisar alterar o codigo.
var propNova = 'LastName';
alunos[propNova] = 'Sampaio';

console.log(alunos);