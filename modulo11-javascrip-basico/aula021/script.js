//Var, Let e Const
//É interressante a utilização do let e const no lugar de var para se ocorrer algum erro ficar melhor para encontra-lo. 

//Var - tem o escopo global, ou seja, ela vai funcionar em todo local do meu código e seu valor pode ser reatribuido depois.

var numero1 = 34;
numero1 = 13;

console.log(numero1);

//Let - já o let tem o escopo local, se ela tiver dentro de um bloco, vai fucnionar somente dentro dele e também pode ser reatribuido o valor.

{
    let numero2 = 11;
    numero2 = 7;

    console.log(numero2);
}


//Const - é uma constante e seu valor não pode ser reatribuido depois no código, mais pode ser modificado dependendo se tiver dentro e uma array ou objeto, e assim como o let tem um escopo local. 

const numero3 = [];
numero3.push(10, 9);

console.log(numero3);