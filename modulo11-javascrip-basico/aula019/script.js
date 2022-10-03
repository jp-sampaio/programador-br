//Resumo de como identificar um objeto que tem basicamente 3 forma de serem declaradas

//Primeira forma
var eleitor = {
    nome: "João",
    titulo: 34325,
}
console.log(eleitor);
console.log(eleitor.nome, eleitor.titulo);


//Segunda forma
function estudante(){
    return{
        idade: 23,
        sexo: 'M',
    }
}

var aluno = estudante();

console.log(aluno);
console.log(aluno.idade, aluno.sexo);


//Terceira forma
function atleta(altura, peso){
    this.a = altura;
    this.p = peso;
}

var estatisticas = new atleta(1.80, 80);

console.log(estatisticas);
console.log(estatisticas.a, estatisticas.p);
