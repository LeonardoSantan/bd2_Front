document.addEventListener("DOMContentLoaded", function () {
  let botaoRegistrar = document.getElementById("btn-registro");
  let botaoRegistro = document.getElementById("btn-registrar");
  let nome,
    cpf,
    regemail,
    regpass,
    logradouro,
    numero,
    CEP,
    bairro,
    logemail,
    logpass,
    logname;

  function ler() {
    if (window.location.pathname.includes("register.html")) {
      nome = document.getElementById("nome").value;
      cpf = document.getElementById("cpf").value;
      regemail = document.getElementById("regemail").value;
      regpass = document.getElementById("regpass").value;
      logradouro = document.getElementById("logradouro").value;
      numero = document.getElementById("numero").value;
      CEP = document.getElementById("CEP").value;
      bairro = document.getElementById("bairro").value;
    } else if (window.location.pathname.includes("login.html")) {
      logname = document.getElementById("register-name").value;
      logemail = document.getElementById("register-email").value;
      logpass = document.getElementById("register-password").value;
    }
  }

  function salvarDados() {
    ler();
    if (window.location.pathname.includes("register.html")) {
      localStorage.setItem("nome", nome);
      localStorage.setItem("cpf", cpf);
      localStorage.setItem("regemail", regemail);
      localStorage.setItem("regpass", regpass);
      localStorage.setItem("logradouro", logradouro);
      localStorage.setItem("numero", numero);
      localStorage.setItem("CEP", CEP);
      localStorage.setItem("bairro", bairro);
    } else if (window.location.pathname.includes("login.html")) {
      localStorage.setItem("logemail", logemail);
      localStorage.setItem("logpass", logpass);
      localStorage.setItem("logname", logname);
    }
  }

  function popular() {
    if (window.location.pathname.includes("login.html")) {
      if (localStorage.getItem("regemail")) {
        document.getElementById("login-email").value =
          localStorage.getItem("regemail");
      }
      if (localStorage.getItem("regpass")) {
        document.getElementById("login-password").value =
          localStorage.getItem("regpass");
      }
    } else if (window.location.pathname.includes("register.html")) {
      if (localStorage.getItem("logemail")) {
        document.getElementById("regemail").value =
          localStorage.getItem("logemail");
      }
      if (localStorage.getItem("logpass")) {
        document.getElementById("regpass").value =
          localStorage.getItem("logpass");
      }
      if (localStorage.getItem("logname")) {
        document.getElementById("nome").value = localStorage.getItem("logname");
      }
    }
  }

  if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", function (ev) {
      ev.preventDefault();
      salvarDados(); // Chamar salvarDados() antes de redirecionar
      window.location.href = "login.html";
    });
  }

  if (botaoRegistro) {
    botaoRegistro.addEventListener("click", function (ev) {
      ev.preventDefault();
      salvarDados(); // Chamar salvarDados() antes de redirecionar
      window.location.href = "register.html";
    });
  }

  popular();
});
