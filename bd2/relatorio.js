document.addEventListener("DOMContentLoaded", () => {
  axios.defaults.headers.common["user"] = localStorage.getItem("id");
  const urlRelatorio = `https://smsfranciscobeltrao.com.br/compras/${localStorage.getItem(
    "id"
  )}/`;

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
          card.classList.add("compra", "col-md-4", "border", "border-warning");

          const cardContent = document.createElement("div");
          cardContent.classList.add("compra-content");

          const nome = document.createElement("h5");
          nome.classList.add("compra-title");
          nome.textContent = produto.nome_produto;
          cardContent.appendChild(nome);

          const detalhes = document.createElement("div");

          const detalhesQtt = document.createElement("p");
          detalhesQtt.classList.add("compra-text");
          detalhesQtt.textContent = `Quantidade: ${produto.quantidade}`;
          cardContent.appendChild(detalhes);
          const detalhesPgt = document.createElement("p");
          detalhesPgt.classList.add("compra-text");
          detalhesPgt.textContent = `Forma de Pagamento: ${produto.forma_pagamento}`;
          cardContent.appendChild(detalhes);
          const detalhesCdg = document.createElement("p");
          detalhesCdg.classList.add("compra-text");
          detalhesCdg.textContent = `Código: ${produto.codigo}`;
          cardContent.appendChild(detalhes);

          detalhes.appendChild(detalhesCdg);
          detalhes.appendChild(detalhesPgt);
          detalhes.appendChild(detalhesQtt);

          const horario = document.createElement("p");
          horario.classList.add("compra-text", "fw-bold");
          horario.textContent = `Horario: ${produto.horario}`;
          cardContent.appendChild(horario);

          const preco = document.createElement("p");
          preco.classList.add("compra-text", "fw-bold");
          preco.textContent = `Preço: R$ ${produto.valor_total.toFixed(2)}`;
          cardContent.appendChild(preco);

          card.appendChild(cardContent);

          const imagem = document.createElement("img");
          imagem.classList.add("compra-img");
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
