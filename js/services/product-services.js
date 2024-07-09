const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createElement = (nome, preco, imagem) => {
    return fetch("http://localhost:3000/products", {
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
    return fetch(`http://localhost:3000/products/${id}`, {
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