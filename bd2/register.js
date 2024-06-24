function preencherValores() {
  const nomeStorage = localStorage.getItem("nome");
  const emailStorage = localStorage.getItem("regemail");
  const senhaStorage = localStorage.getItem("regpass");

  if (nomeStorage) document.getElementById("nome").value = nomeStorage;
  if (emailStorage) document.getElementById("regemail").value = emailStorage;
  if (senhaStorage) document.getElementById("regpass").value = senhaStorage;
}

function postRegister() {
  const nome = document.getElementById("nome").value;
  const regemail = document.getElementById("regemail").value;
  const regpass = document.getElementById("regpass").value;
  const cpf = document.getElementById("cpf").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = parseInt(document.getElementById("numero").value, 10);
  const cep = document.getElementById("CEP").value;
  const bairro = document.getElementById("bairro").value;
  console.log(nome, regemail, regpass, cpf, logradouro, numero, cep, bairro);
  const urlRegister = "https://smsfranciscobeltrao.com.br/pessoa/";

  localStorage.setItem("nome", nome);
  localStorage.setItem("regemail", regemail);
  localStorage.setItem("regpass", regpass);
  localStorage.setItem("cpf", cpf);
  localStorage.setItem("logradouro", logradouro);
  localStorage.setItem("numero", numero.toString());
  localStorage.setItem("cep", cep);
  localStorage.setItem("bairro", bairro);

  axios
    .post(urlRegister, {
      nome: nome,
      email: regemail,
      senha: regpass,
      documento: cpf,
      logradouro: logradouro,
      numero: numero,
      cep: cep,
      bairro: bairro,
    })
    .then((response) => {
      const data = response.data;
      localStorage.setItem("id", data.codigo);
      window.location.href = "login.html";
    })
    .catch(function (error) {
      console.error("Erro ao enviar a requisição:", error.message);
      console.error(
        "Detalhes do erro:",
        error.response ? error.response.data : error
      );
      alert("Erro ao registrar. Verifique os dados e tente novamente.");
    });
}

window.onload = function () {
  preencherValores();
  document
    .getElementById("btn-registro")
    .addEventListener("click", function (event) {
      event.preventDefault();
      postRegister();
    });
};
