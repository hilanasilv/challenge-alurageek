const prompt = require('prompt-sync')();

// Correção dos códigos dos produtos para strings
var produtos1 = {
    codigo: '001',
    descricao: 'Smartphone Samsung Galaxy S22',
    preco: 4999,
    disponivel: true
};

var produtos2 = {
    codigo: '002',
    descricao: 'Smart TV LED 55',
    preco: 3499,
    disponivel: true
};

var produtos3 = {
    codigo: '003',
    descricao: 'Câmera Fotográfica Canon T7',
    preco: 2299,
    disponivel: true
};

var Produtos = [produtos1, produtos2, produtos3];

// Função para visualizar produtos
function visualizarProdutos(Produtos) {
    for (var i = 0; i < Produtos.length; i++) {
        console.log(Produtos[i].codigo + ' - ' + Produtos[i].descricao + ' - R$ ' + Produtos[i].preco);
    }
}

// Função para exibir produtos disponíveis
function produDispo() {
    console.log("Produtos disponíveis são:");
    var disponiveis = Produtos.filter(function (produto) {
        return produto.disponivel;
    });

    for (var i = 0; i < disponiveis.length; i++) {
        console.log(disponiveis[i].codigo + ' - ' + disponiveis[i].descricao + ' - R$ ' + disponiveis[i].preco);
    }
}

// Função para registrar uma venda
function registrarVenda(Produtos, listaLancamentos) {
    console.log("Produtos disponíveis para venda:");
    for (var i = 0; i < Produtos.length; i++) {
        console.log(Produtos[i].codigo + ' - ' + Produtos[i].descricao + ' - R$ ' + Produtos[i].preco);
    }

    var codDese = prompt("Digite o código do produto que deseja vender: ");
    var produto = Produtos.find(function (produto) {
        return produto.codigo === codDese;
    });

    if (!produto || !produto.disponivel) {
        console.log("Código de produto inválido!");
        return listaLancamentos;
    }

    var quantidade = parseInt(prompt("Digite a quantidade de itens: "));
    if (quantidade <= 0) {
        console.log("Quantidade inválida!");
        return listaLancamentos;
    }

    produto.disponivel = false; // Marcar o produto como não disponível
    var total = produto.preco * quantidade;
    listaLancamentos.push({ descricao: produto.descricao, quantidade: quantidade, total: total });

    console.log("Produto adicionado com sucesso!");
    return listaLancamentos;
}

// Função para imprimir a nota fiscal
function imprimirNotaFiscal(listaLancamentos){
    var totalfinal = 0;

    console.log(`| NOTA FISCAL                                |`);
    console.log(`|                                            |`);
    console.log(`| Empresa: Télos NF                          |`);
    console.log(`| CNPJ: 12.345.678/0001-90                   |`);
    console.log(`| Endereço: Rua das Flores, 123              |`);
    console.log(`| Cidade: Cidade Exemplo                     |`);
    console.log(`| Data: 12/08/2023                           |`);
    console.log(`| Número: 123                                |`);
    console.log(`|                                            |`);
    console.log(`|--------------------------------------------|`);
    console.log(`|                                            |`);
    console.log(`| Qtd  | Produto                | Preço (R$) |`);
    console.log(`|--------------------------------------------|`);

    for (var i = 0; i < listaLancamentos.length; i++) {
        var item = listaLancamentos[i];
        totalfinal += item.total;
        console.log(`| ${item.quantidade}   | ${item.descricao} | R$${item.total.toFixed(2)} |`);
    }

    console.log(`|                                            |`);
    console.log(`|--------------------------------------------|`);
    console.log(`|                                            |`);
    console.log(`| TOTAL: R$${totalfinal.toFixed(2)}                |`);
    console.log(`|                                            |`);
    console.log(`|--------------------------------------------|`);
}

// Inicialização da lista de lançamentos
var listaLancamentos = [
    { quantidade: 2, descricao: produtos1.descricao, total: produtos1.preco * 2 },
    { quantidade: 1, descricao: produtos2.descricao, total: produtos2.preco }
];

// Loop principal do menu
while (true) {
    var operacao = prompt("Escolha uma das opções abaixo e digite um número.\n(1) Visualizar produtos cadastrados;\n(2) Lançar venda de produto;\n(3) Imprimir nota fiscal;\n(4) Iniciar uma nova venda;\n(5) Sair ");
    operacao = parseInt(operacao);

    switch (operacao) {
        case 1:
            console.log("Produtos cadastrados são:");
            visualizarProdutos(Produtos);
            break;
        case 2:
            console.log("Lançamentos venda produto");
            produDispo();
            registrarVenda(Produtos, listaLancamentos);
            for (var i = 0; i < listaLancamentos.length; i++) {
                console.log(listaLancamentos[i]);
            }
            break;
        case 3:
            console.log("Você está na opção de imprimir.");
            imprimirNotaFiscal(listaLancamentos);
            break;
        case 4:
            console.log("Você está na opção de nova venda.");
            listaLancamentos = [];
            console.log("Nova venda iniciada");
            break;
        case 5:
            console.log("Você está na opção de sair.");
            console.log("Saindo do sistema...");
            return;  // Saindo do loop e do programa
        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
}
