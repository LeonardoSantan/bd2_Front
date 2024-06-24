
document.addEventListener("DOMContentLoaded", function () {
    let switchCheckbox = document.getElementById("reg-log");
    let botaoLogin = document.getElementById("btn-login");
    let botaoRegistrar = document.getElementById("btn-registrar");
  
    function salvarDados() {
      if (switchCheckbox.checked) {
        // Card de registrar está ativo
        let nome = document.getElementById("register-name").value;
        let regemail = document.getElementById("register-email").value;
        let regpass = document.getElementById("register-password").value;
  
        localStorage.setItem("nome", nome);
        localStorage.setItem("regemail", regemail);
        localStorage.setItem("regpass", regpass);
      } else {
        // Card de login está ativo
        let logemail = document.getElementById("login-email").value;
        let logpass = document.getElementById("login-password").value;
  
        localStorage.setItem("logemail", logemail);
        localStorage.setItem("logpass", logpass);
      }
    }
  
    if (botaoLogin) {
      botaoLogin.addEventListener("click", function (ev) {
        ev.preventDefault();
        salvarDados();
        postLogin();
        // Aqui você pode redirecionar se necessário
      });
    }
  
    if (botaoRegistrar) {
      botaoRegistrar.addEventListener("click", function (ev) {
        ev.preventDefault();
        salvarDados();
        console.log("Dados de Registro salvos:");
        console.log("Nome:", localStorage.getItem("nome"));
        console.log("Email:", localStorage.getItem("regemail"));
        console.log("Senha:", localStorage.getItem("regpass"));
        // Aqui você pode redirecionar se necessário
      });
    }
  });
  
  function postLogin() {
    const url = "https://smsfranciscobeltrao.com.br";
    const urlLogin = `${url}/login/`;
    console.log('chegou aqui');
    console.log("Email:", localStorage.getItem("logemail"));
    console.log("Senha:", localStorage.getItem("logpass"));
  
    const logemail = localStorage.getItem("logemail");
    const logpass = localStorage.getItem("logpass");
  
    axios.post(urlLogin, {
      "user": logemail,
      "password": logpass
    })
      .then((response) => {
        if(response.status === 200) {
          const data = response.data;
          localStorage.setItem("id", data.codigo);
          window.location.href = 'main.html';
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }