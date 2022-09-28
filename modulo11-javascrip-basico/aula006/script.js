/* Operadores Lógicos
-- && e (só vai ser verdadeiro se os valores forem todos verdadeiros);
-- || ou (só vai ser falso se os todos os valores forem falsos);
-- ! negativo (É o oposto);
*/

//Operador lógico && e
var idade = 23;
var maiorQue20 = idade >= 20;
var menorQue30 = idade <= 30;
var entre = maiorQue20 && menorQue30;

console.log('Minha idade', idade);
console.log('É maior que 20 anos', maiorQue20);
console.log('É menor que 30 anos', menorQue30);
console.log('Esta entre 20 e 30?', entre);

//==========================================
console.log('============================');
//==========================================

//Operador Lógico || ou
var anos = 55;
var menorQue10 = anos <= 10;
var maiorQue65 = anos >= 65;
var passeLivre = menorQue10 || maiorQue65;

console.log('Idade do cliente', anos);
console.log('É menor que 10 anos', menorQue10);
console.log('É maior que 65 anos', maiorQue65);
console.log('Tem direito a passe livre?', passeLivre);

//==========================================
console.log('============================');
//==========================================

//Operador Lógico ! Negativo
var mediaFinal = 8.0;
var maiorQue7 = mediaFinal >= 7.0;
var menorQue6 = !mediaFinal;
var passouDeAno = maiorQue7 || menorQue6;

console.log('Media final', mediaFinal);
console.log('É maior que 7', maiorQue7);
console.log('Menor que 6', !menorQue6); //Oposto do que era antes.
console.log('Passou de ano', passouDeAno);

//O certo aqui é utilizar o if e else para resolver essa questão.