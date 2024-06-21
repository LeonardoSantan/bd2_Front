// main.js

console.log("Script main.js carregado");

const url = "http://127.0.0.1:5000";
const urlProdutos = `${url}/produtos/`;

function getProdutos() {
  console.log("Função getProdutos chamada");
  axios
    .get(urlProdutos)
    .then((response) => {
      console.log("Dados recebidos:", response.data);
      const produtos = response.data;
      const produtosContainer = document.querySelector(".produtos");
      produtosContainer.innerHTML = "";

      produtos.forEach((produto) => {
        console.log("Processando produto:", produto);
        const produtoDiv = document.createElement("div");
        produtoDiv.className =
          "produto border rounded-4 border-4 border-warning bg-dark-subtle p-3 mb-3";
        produtoDiv.style.background = `url(${produto.imagem}), rgba(255, 255, 255, 0)`;
        produtoDiv.style.backgroundSize = "contain";
        produtoDiv.style.backgroundPosition = "center";
        produtoDiv.style.backgroundRepeat = "no-repeat";

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;
        produtoDiv.appendChild(nome);

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao; // Assumindo que há um campo 'descricao'
        produtoDiv.appendChild(descricao);

        const preco = document.createElement("h5");
        preco.textContent = `Preço: ${produto.valor}`; // Assumindo que há um campo 'preco'
        produtoDiv.appendChild(preco);

        produtosContainer.appendChild(produtoDiv);
      });
    })
    .catch((error) => console.error(error));
}

// Chama getProdutos() quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", getProdutos);
