/* Operadores de Comparação
-- == igualdade (ver se os valores são igual sem levar em conta o tipo);
-- === igualdade igualdade (ver se são iguais e do mesmo tipo); recomendado
-- != diferente (ver se os valores são diferente sem levar em conta o tipo);
-- !== diferente diferente ( ver se os valotres são diferentes e do tipo diferente); recomendado
-- > maior que ( se um valor é maior que outro);
-- < menor que ( se um valor é menor que outro);
-- >= maior ou igual ( se um valor é maior ou igual aquele outro valor);
-- <= menor ou igual ( se um valor é menor ou igual aquele outro valor);
*/

//Igualdade simples
var a = 23;
var b = '23';
console.log(a == b);

//Igualdade complexa
var c = 23;
var d = '23';
console.log(c === d); 

//Diferente simples
var e = 11;
var f = '11';
console.log(e != f);

//Diferente complexo
var g = 11;
var h = '11';
console.log(g !== h);

//Maior que
var i = 1000;
var j = 345;
console.log(i > j);

//Maior ou igual que
var k = 44;
var l = 45;
console.log(k >= l);

//Menor que 
var m = 10;
var n = 3;
console.log(m < n);

//Menor ou igual que 
var o = 8;
var p = 8;
console.log(o <= p);
