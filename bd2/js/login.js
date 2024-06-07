document.addEventListener("DOMContentLoaded", function () {
  let botaoRegistrar = document.getElementById("btn-registro");
  let nome, cpf, regemail, regpass, logradouro, numero, CEP, bairro;

  function ler() {
    nome = document.getElementById("nome").value;
    cpf = document.getElementById("cpf").value;
    regemail = document.getElementById("regemail").value;
    regpass = document.getElementById("regpass").value;
    logradouro = document.getElementById("logradouro").value;
    numero = document.getElementById("numero").value;
    CEP = document.getElementById("CEP").value;
    bairro = document.getElementById("bairro").value;
  }

  function salvarDados() {
    localStorage.setItem("nome", nome);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("regemail", regemail);
    localStorage.setItem("regpass", regpass);
    localStorage.setItem("logradouro", logradouro);
    localStorage.setItem("numero", numero);
    localStorage.setItem("CEP", CEP);
    localStorage.setItem("bairro", bairro);
  }

  function popular() {
    if (localStorage.getItem("regemail")) {
      document.getElementById("login-email").value =
        localStorage.getItem("regemail");
    }
    if (localStorage.getItem("regpass")) {
      document.getElementById("login-password").value =
        localStorage.getItem("regpass");
    }
  }

  if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", function (ev) {
      ev.preventDefault();
      ler();
      salvarDados();
      window.location.href = "login.html";
    });
  }

  popular();
});
