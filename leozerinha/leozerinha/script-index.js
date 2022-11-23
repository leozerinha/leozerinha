const form = document.getElementById("form");

const nome = document.getElementById("nome");

const login = document.getElementById("login");

const email = document.getElementById("email");

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const senha = document.getElementById("senha");
const confsenha = document.getElementById("confsenha");

const span = document.querySelectorAll("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function entrar() {
  if (
    (nome.value, login.value, email.value, senha.value, confsenha.value == "")
  ) {
  } else if (
    (nome.value.length < 10,
    login.value.length > 10,
    !emailRegex.test(email.value),
    senha.value != confsenha.value)
  ) {
  } else {
    window.location.href = "list.html";
  }
}

function nomeValidar() {
  if (nome.value == "") {
    span[0].style.display = "none";
  } else if (nome.value.length < 10) {
    span[0].style.display = "block";
  } else {
    span[0].style.display = "none";
    var nomeSave = document.querySelector("#nome").value;
    localStorage.setItem("nome", nomeSave);
  }
}

function loginValidar() {
  if (login.value == "") {
    span[1].style.display = "none";
  } else if (login.value.length > 10) {
    span[1].style.display = "block";
  } else {
    span[1].style.display = "none";
    var loginSave = document.querySelector("#login").value;
    localStorage.setItem("login", loginSave);
  }
}

function emailValidar() {
  if (email.value == "") {
    span[2].style.display = "none";
  } else if (!emailRegex.test(email.value)) {
    span[2].style.display = "block";
  } else {
    span[2].style.display = "none";
    var emailSave = document.querySelector("#email").value;
    localStorage.setItem("email", emailSave);
  }
}

function compareSenha() {
  if (senha.value == "" && confsenha.value == "") {
    span[3].style.display = "none";
    span[4].style.display = "none";
  } else if (senha.value == confsenha.value) {
    span[3].style.display = "none";
    span[4].style.display = "none";
    var senhaSave = document.querySelector("#senha").value;
    localStorage.setItem("senha", senhaSave);
  } else {
    span[3].style.display = "block";
    span[4].style.display = "block";
  }
}
