//Converter o nosso real em dolar para aprender a utilizar o fetch;

let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL";
let dadoEntrada = document.querySelector("#valor");
let converter = document.querySelector(".converter");
let resultado = document.querySelector(".resultado");

converter.addEventListener("click", () => {
    fetch(url).then((Response) => {
        return Response.json();
    }).then((data) => {
        let cotação = data.USDBRL.high;
        let valor = Number(dadoEntrada.value);
        let reais = valor * cotação;
        let nomeReal = valor === 1 ? "Dolar é" : "Dolares são";
        resultado.innerHTML = `Na cotação atual de ${Number(cotação).toFixed(2)}, ${valor} ${nomeReal}  equivalentes a ${reais.toFixed(2)} reais.`
    })
})
