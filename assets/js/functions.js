// Função simples sem parâmetro
function mensagemBoasVindas() {
    console.log("Bem-vindo ao sistema!");
}

mensagemBoasVindas();

function mensagemError() {
    console.log("Erro ao tentar acessar o sistema!");
}

mensagemError();

// Função simples com parâmetro
function receberParametro(recebendoTexto) {
    console.log(RecebendoTexto);
}

receberParametro("Enviando texto para a função!");

function receberNumero(recebendoNumero) {
    console.log(recebendoNumero);
}

receberNumero(5);

function funcionarios(nome,email,salario) {
    const func = `
    o nome do funcionario é ${nome}, o email é ${email}, o seu salario é ${salario}
    `
    console.log(func);
}


funcionarios("Kauany", "kauany@kakau.com", 5000)

