document.addEventListener("DOMContentLoaded", () => {
    axios.defaults.headers.common['user'] = localStorage.getItem("id");
    const urlRelatorio = `https://smsfranciscobeltrao.com.br/compras/${localStorage.getItem("id")}/`;

    function getCompra() {
        console.log("Função getCompra chamada");

        axios
            .get(urlRelatorio)
            .then((response) => {
                console.log("Dados recebidos:", response.data);
                const produtos = response.data;
                const produtosContainer = document.querySelector(".produtos");
                produtosContainer.innerHTML = "";

                produtos.forEach((produto) => {
                    console.log("Processando produto:", produto);

                    const card = document.createElement("div");
                    card.classList.add("card", "col-md-4");


                    const cardContent = document.createElement("div");
                    cardContent.classList.add("card-content");


                    const nome = document.createElement("h5");
                    nome.classList.add("card-title");
                    nome.textContent = produto.nome_produto;
                    cardContent.appendChild(nome);


                    const detalhes = document.createElement("p");
                    detalhes.classList.add("card-text");
                    detalhes.textContent = `Quantidade: ${produto.quantidade} | Forma de Pagamento: ${produto.forma_pagamento} | Código: ${produto.codigo}`;
                    cardContent.appendChild(detalhes);


                    const preco = document.createElement("p");
                    preco.classList.add("card-text", "fw-bold");
                    preco.textContent = `Preço: R$ ${produto.valor_total.toFixed(2)}`;
                    cardContent.appendChild(preco);


                    card.appendChild(cardContent);


                    const imagem = document.createElement("img");
                    imagem.classList.add("card-img");
                    imagem.src = produto.imagem_produto;
                    imagem.alt = produto.nome_produto;
                    card.appendChild(imagem);


                    produtosContainer.appendChild(card);
                });
            })
            .catch((error) => console.error("Erro ao buscar dados:", error));
    }

    getCompra();
});