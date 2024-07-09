import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const formulario = document.querySelector("[data-form]");

function createElement(nome, preco, imagem, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="imagem-container">
            <img src="${imagem}" alt="${nome}">
        </div>

        <div class="card-container__informacao">
            <p>${nome}</p>
            <div class="card-container__valor">
                <p>${preco}</p>
                <button class="botao-excluir" data-id="${id}">
                    <img src="/public/images/trash-can-solid.svg" alt="icone lixeira">
                </button>
            </div>
        </div>
    `

    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProduct = await servicesProducts.productList();

        listProduct.forEach(product => {
            productContainer.appendChild(createElement(product.nome, product.preco, product.imagem, product.id));
        });

    } catch (error) {
        console.log(error);
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("[data-name]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    servicesProducts.createElement(nome, preco, imagem)
    .then((resposta) => console.log(resposta))
    .catch((erro) => console.log(erro));
});

productContainer.addEventListener("click", async (evento) => {
    if (evento.target.classList.contains("botao-excluir") || evento.target.closest(".botao-excluir")) {
        const botaoExcluir = evento.target.closest(".botao-excluir");
        const id = botaoExcluir.dataset.id;
        try {
            await servicesProducts.deletaProduto(id);
            botaoExcluir.closest(".card").remove();
        } catch (erro) {
            console.log(erro);
        }
    }
});

render();