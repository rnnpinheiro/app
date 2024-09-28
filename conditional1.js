// condicionais, switch

const { select } = require('@inquirer/prompts');

const start = async () => {

    while(true) {


        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        });


        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar suas metas..");
                break
            case "listar":
                console.log("Vamos listar");
                break
            case "sair":
                console.log("Até mais..");
                return
        }
    }
}

start();