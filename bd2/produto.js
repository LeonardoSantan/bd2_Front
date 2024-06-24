document.addEventListener("DOMContentLoaded", () => {
  const urlProdutoIndividual = `https://smsfranciscobeltrao.com.br/produtos/${localStorage.getItem(
    "currentProduto"
  )}/`;
  const userId = localStorage.getItem("id");

  axios.defaults.headers.common["user"] = userId;

  axios
    .get(urlProdutoIndividual)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      let nome = document.querySelector("#titulo");
      let grupo = document.querySelector("#grupo");
      let preco = document.querySelector("#preco");
      let quantidade = document.querySelector("#quantidade");
      let fornecedor = document.querySelector("#fornecedor");
      let descricao = document.querySelector("#descricao");
      let imagem = document.querySelector("#imagem");

      nome.textContent = data.nome;
      grupo.textContent = data.grupo;
      preco.textContent = data.valor;
      quantidade.textContent = data.quantidade;
      fornecedor.textContent = data.fornecedor;
      descricao.textContent = data.descricao;
      imagem.src = data.imagem;

      // Save product quantity to localStorage
      localStorage.setItem("produtoQuantidade", data.quantidade);
    })
    .catch((error) => console.error(error));
});

document.addEventListener("DOMContentLoaded", () => {
  const urlFormapagamento = `https://smsfranciscobeltrao.com.br/formaspagamento/`;
  const userId = localStorage.getItem("id");

  axios.defaults.headers.common["user"] = userId;

  axios
    .get(urlFormapagamento)
    .then((response) => {
      console.log(response.data);

      let formasPagamento = response.data;

      let selectFormaPagamento = document.querySelector("#formaPagamento");
      formasPagamento.forEach((forma) => {
        const option = document.createElement("option");
        option.value = forma.codigo;
        option.textContent = forma.descricao;
        selectFormaPagamento.appendChild(option);
      });
    })
    .catch((error) => console.error(error));
});

document.getElementById("btnComprar").addEventListener("click", () => {
  const url = "https://smsfranciscobeltrao.com.br";
  const urlCompra = `${url}/compra/`;
  const userId = localStorage.getItem("id");

  axios.defaults.headers.common["user"] = userId;

  const codigoProduto = localStorage.getItem("currentProduto");
  const quantidadeVenda = document.getElementById("quantidadeVenda").value;
  const formaPagamento = document.querySelector("#formaPagamento").value;

  const quantidadeDisponivel = localStorage.getItem("produtoQuantidade");

  if (parseInt(quantidadeVenda) > parseInt(quantidadeDisponivel)) {
    console.log("Quantidade solicitada maior do que disponível");
    const myModalAlternative = new bootstrap.Modal(
      document.getElementById("ModalErro"),
      {
        backdrop: true,
        keyboard: true,
        focus: true,
      }
    );
    myModalAlternative.show();
  } else {
    const myModalAlternative = new bootstrap.Modal(
      document.getElementById("ModalSucesso"),
      {
        backdrop: true,
        keyboard: true,
        focus: true,
      }
    );
    myModalAlternative.show();
    const dadosCompra = {
      codigo_produto: codigoProduto,
      quantidade: quantidadeVenda,
      usuario: userId,
      forma_pagamento: formaPagamento,
    };

    axios
      .post(urlCompra, dadosCompra)
      .then((response) => {
        console.log("Compra realizada com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao realizar a compra:", error);
      });
  }
});
