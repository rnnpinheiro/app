// Hello world explorando {  como escopo   }

const mensagem = "Hello, Renan!"

{
    const mensagem = "Hello, Mundo!"        // isso é um novo escopo, essa mensagem n vai sair pq n tem console.log
    console.log(mensagem);
}

console.log(mensagem);