const productList = () => {
    return fetch("https://668dc9c6099db4c579f3eabc.mockapi.io/products/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createElement = (nome, preco, imagem) => {
    return fetch("https://668dc9c6099db4c579f3eabc.mockapi.io/products/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome,
            preco,
            imagem,
        })
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

const deletaProduto = (id) => {
    return fetch(`https://668dc9c6099db4c579f3eabc.mockapi.io/products/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

export const servicesProducts = {
    productList,
    createElement,
    deletaProduto,
};