// function greeting(name) {
//     alert('Olá ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Por favor insira seu nome.');
//     callback(name);
// }

// processUserInput(greeting);
//==============================================================

//CALBACK
// let usuarios = ["João", "Miguel", "Maria", "Joana"];

// function inserirUsuarios(nome, callback){
//     setTimeout(() => {
//         usuarios.push(nome); 
//         callback(); /* Só mostra o resualtado depois que é realizado a operação por um todo.*/
//     }, 1000);
// }

// function listarUsuarios(){
//     console.log(usuarios);
// }

// inserirUsuarios("Mateus", listarUsuarios);

//PROMISES
let usuarios = ["Joaquim", "Benedita", "Vinicios", "Renata", "Beatriz"];

function inserirUsuarios(nome) {
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            usuarios.push(nome);
            let erro = false;

            if(!erro){
                resolve();
            }else{
                reject({msg: "Ocorreu um erro na operação"})
            }
        }, 1000);
    });
    return promise;
};

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuarios("Vitor").then(listarUsuarios).catch((erro) => {
    console.log(erro.msg)
});

//Async Await
// async function executar(){
//     await inserirUsuarios("Claudia");
//     listarUsuarios();
// }

// executar();