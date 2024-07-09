// Estrutura de dados do tipo Array para armazenar os produtos
var produtos = [
    { codigo: "001", nome: "Computador Desktop Intel Core i5", preco: 3199.00 },
    { codigo: "002", nome: "Laptop Ultrabook Intel Core i7", preco: 4799.00 },
    { codigo: "003", nome: "Monitor LED 24 polegadas Full HD", preco: 799.90 },
    { codigo: "004", nome: "Teclado Mecânico Gamer RGB", preco: 299.00 },
    { codigo: "005", nome: "Mouse Óptico Sem Fio", preco: 79.90 }
];

// Estrutura de dados para armazenar os itens do carrinho de compras 
var carrinhoCompras = [];

// Exibe os produtos disponíveis
function visualizarProdutos() {
    var mensagem = "Lista de Produtos Disponíveis:\n";
    produtos.forEach(function (produto) {
        mensagem += `${produto.codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
    });
    alert(mensagem);
}

function registrarVenda() {
    var mensagem = "Registro de Venda\n";
    mensagem += "-----\n";
    mensagem += "Lista de Produtos Disponíveis:\n";

    // Verifica se existem produtos
    if (produtos.length === 0) {
        alert("Não há produtos disponíveis para venda!");
        return;
    }

    produtos.forEach(function (produto) {
        mensagem += `${produto.codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
    });

    var codigoProduto = prompt(mensagem + "\nDigite o código do produto que deseja adicionar:");

    // Busca o produto através do código fornecido
    var produtoSelecionado = produtos.find(function (produto) {
        return produto.codigo === codigoProduto;
    });

    // Verifica se o produto foi encontrado
    if (!produtoSelecionado) {
        alert("Produto não encontrado!");
        return;
    }

    var quantidade = parseInt(prompt("Digite a quantidade de produtos:"));

    carrinhoCompras.push({ codigo: codigoProduto, nome: produtoSelecionado.nome, quantidade: quantidade, precoUnitario: produtoSelecionado.preco.toFixed(2) });
    alert("Produto adicionado com sucesso!");
}

// Inicia uma nova venda
function iniciarNovaVenda() {
    carrinhoCompras = []; // Array vazio para limpar o carrinho de compras
    alert("Nova venda iniciada!");
}

// Imprime a nota fiscal
function imprimirNotaFiscal() {
    var empresa = "Télos NF";
    var cnpj = "12.345.678/0001-90";
    var endereco = "Ladeira da Glória, 26";
    var cidade = "Rio de Janeiro";
    var data = new Date().toLocaleString();


    var mensagem = "NOTA FISCAL\n\n";
    mensagem += `Empresa: ${empresa}\n`;
    mensagem += `CNPJ: ${cnpj}\n`;
    mensagem += `Endereço: ${endereco}\n`;
    mensagem += `Cidade: ${cidade}\n`;
    mensagem += `Data: ${data}\n`;
    mensagem += "-------------\n";

    var total = 0;
    carrinhoCompras.forEach(function (lancamento) {
        mensagem += `Produto: ${lancamento.nome}\nPreço: ${lancamento.precoUnitario}\nQuantidade: ${lancamento.quantidade}\n`; mensagem += "-------------\n";
        total += lancamento.quantidade * lancamento.precoUnitario;
    });

    mensagem += `TOTAL: R$ ${total}`;

    alert(mensagem);
}

// Loop infinito para exibir o menu de forma contínua
while (true) {
    var opcao = prompt("Escolha uma opção:\n 1 - Visualizar produtos cadastrados;\n 2 - Registrar Venda;\n 3 - Imprimir nota fiscal;\n 4 - Iniciar uma nova venda;\n 5 - Sair.");

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
            alert("Sistema encerrado!");
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }

    if (opcao === "5") {
        break; // Encerra o loop
    }
}
