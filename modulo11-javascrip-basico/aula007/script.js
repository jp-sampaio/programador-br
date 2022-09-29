//Transformando strings em números
//Faz uma concatenação dos nomes e só funciona adição com as strings
//Se na strings tiver somente números e for realizado uma operação aritmetica nele diferente de adição então a strings se transforma em number.

// var str = 'Meu nome ';
// str += ' e meu sobrenome';
var str = '8'
var numero = 6;
str *= numero;
console.log(str);

//ParseInt(Transforma string em número inteiro) e ParseFloat(Transforma string em número decimal);

var a = '20';
var b = '22';
var c = '11.4';
var d = parseInt(a) + parseInt(b) + parseFloat(c);
console.log(d);
