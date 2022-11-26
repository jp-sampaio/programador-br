function calcular(){
    var nota1 = document.getElementById("n1");
    var nota2 = document.getElementById("n2");
    var resposta = document.getElementById("resultado");
    var n1 = Number(nota1.value);
    var n2 = Number(nota2.value);
    var media = (n1+n2)/2;
    
    resposta.innerHTML = `Sua media é de ${media}`;
}