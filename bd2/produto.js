console.log('entrou aqui');

document.addEventListener("DOMContentLoaded", () => {
    const url = `https://smsfranciscobeltrao.com.br/produtos/${localStorage.getItem('currentProduto')}/`
    axios.defaults.headers.user = localStorage.getItem("id");
    axios.get(url)
    .then((response) => {
        console.log(response.data);
        const data = response.data;

        let nome = document.querySelector('#titulo');

        let grupo = document.querySelector('#grupo');
        let preco = document.querySelector('#preco');
        let quantidade = document.querySelector('#quantidade');
        let fornecedor = document.querySelector('#fornecedor');
        let descricao = document.querySelector('#descricao');

        let imagem = document.querySelector('#imagem');

        nome.innerHTML = data.nome;

        grupo.innerHTML = data.grupo;
        preco.innerHTML = data.valor;
        quantidade.innerHTML = data.quantidade;
        fornecedor.innerHTML = data.fornecedor;
        descricao.innerHTML = data.descricao

        imagem.src = data.imagem;
    })
    .catch((error) => console.log(error));
});