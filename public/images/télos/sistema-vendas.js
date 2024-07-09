//Esta linha importa o módulo readline-sync, que permite a leitura de entrada do usuário no terminal de maneira síncrona.
const readline = require('readline-sync');

// Estrutura de dados do tipo Array para armazenar os produtos
const produtos = [
    { codigo: "001", nome: "Computador Desktop Intel Core i5", preco: 3199.00 },
    { codigo: "002", nome: "Laptop Ultrabook Intel Core i7", preco: 4799.00 },
    { codigo: "003", nome: "Monitor LED 24 polegadas Full HD", preco: 799.90 },
    { codigo: "004", nome: "Teclado Mecânico Gamer RGB", preco: 299.00 },
    { codigo: "005", nome: "Mouse Óptico Sem Fio", preco: 79.90 }
];

//Esta constante define uma lista de produtos disponíveis, cada um com código, nome e preço.
let carrinhoCompras = [];

// Exibe os produtos disponíveis
//Função que exibe a lista de produtos disponíveis no terminal. Utiliza o método forEach para iterar sobre os produtos e console.log para exibir cada um.
function visualizarProdutos() {
    console.log("Lista de Produtos Disponíveis:");
    produtos.forEach(function (produto) {
        console.log(`${produto.codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });
}

function registrarVenda() {
    console.log("Registro de Venda");
    console.log("-----");
    console.log("Lista de Produtos Disponíveis:");

    if (produtos.length === 0) {
        console.log("Não há produtos disponíveis para venda!");
        return;
    }

    produtos.forEach(function (produto) {
        console.log(`${produto.codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });

    const codigoProduto = readline.question("Digite o código do produto que deseja adicionar: ");

    const produtoSelecionado = produtos.find(produto => produto.codigo === codigoProduto);

    if (!produtoSelecionado) {
        console.log("Produto não encontrado!");
        return;
    }

    const quantidade = parseInt(readline.question("Digite a quantidade de produtos: "), 10);

    carrinhoCompras.push({
        codigo: codigoProduto,
        nome: produtoSelecionado.nome,
        quantidade: quantidade,
        precoUnitario: produtoSelecionado.preco.toFixed(2)
    });
    console.log("Produto adicionado com sucesso!");
}

function iniciarNovaVenda() {
    carrinhoCompras = [];
    console.log("Nova venda iniciada!");
}

function imprimirNotaFiscal() {
    const empresa = "Télos NF";
    const cnpj = "12.345.678/0001-90";
    const endereco = "Ladeira da Glória, 26";
    const cidade = "Rio de Janeiro";
    const data = new Date().toLocaleString();

    console.log("NOTA FISCAL\n");
    console.log(`Empresa: ${empresa}`);
    console.log(`CNPJ: ${cnpj}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Cidade: ${cidade}`);
    console.log(`Data: ${data}`);
    console.log("-------------");

    let total = 0;
    carrinhoCompras.forEach(function (lancamento) {
        console.log(`Produto: ${lancamento.nome}`);
        console.log(`Preço: ${lancamento.precoUnitario}`);
        console.log(`Quantidade: ${lancamento.quantidade}`);
        console.log("-------------");
        total += lancamento.quantidade * lancamento.precoUnitario;
    });

    console.log(`TOTAL: R$ ${total.toFixed(2)}`);
}

function exibirMenu() {
    console.log("Escolha uma opção:");
    console.log("1 - Visualizar produtos cadastrados");
    console.log("2 - Registrar Venda");
    console.log("3 - Imprimir nota fiscal");
    console.log("4 - Iniciar uma nova venda");
    console.log("5 - Sair");
}

while (true) {
    exibirMenu();
    const opcao = readline.question("Digite a opção desejada: ");

    switch (opcao) {
        case "1":
            visualizarProdutos();
            break;
        case "2":
            registrarVenda();
            break;
        case "3":
            imprimirNotaFiscal();
            break;
        case "4":
            iniciarNovaVenda();
            break;
        case "5":
            console.log("Sistema encerrado!");
            process.exit(0);
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}
