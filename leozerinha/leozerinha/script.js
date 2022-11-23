function adicionar() {
  var conteudo = document.getElementById("texto").value;
  if (conteudo != "") {
    var novoElemento = document.createTextNode(conteudo);
    var divNova = document.createElement("div");
    divNova.className = "itens";
    var botao = document.createElement("button");
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    botao.innerHTML = "Remover";
    botao.className = "button";
    botao.style.color = "white";
    botao.addEventListener("click", function () {
      divNova.remove();
    });
    divNova.appendChild(check);
    check.addEventListener("change", function () {
      if (this.checked) {
        divNova.style.textDecoration = "line-through";
      } else {
        divNova.style.textDecoration = "none";
      }
    });
    divNova.appendChild(novoElemento);

    divNova.appendChild(botao);
    document.getElementById("tarefas").appendChild(divNova);
    document.getElementById("texto").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("cad").style.display = "none";
    document.getElementById("tarefas").style.display = "block";
  }
}

function cadastrar() {
  document.getElementById("cad").style.display = "block";
  document.getElementById("tarefas").style.display = "none";
  document.getElementById("dados").style.display = "none";
}

function exibir() {
  document.getElementById("cad").style.display = "none";
  document.getElementById("tarefas").style.display = "block";
  document.getElementById("dados").style.display = "none";
}

function mostrarDados() {
  document.getElementById("cad").style.display = "none";
  document.getElementById("tarefas").style.display = "none";
  document.getElementById("dados").style.display = "block";

  var nomeDado = localStorage.getItem("nome");
  var loginDado = localStorage.getItem("login");
  var emailDado = localStorage.getItem("email");
  var senhaDado = localStorage.getItem("senha");

  var valor1 = document.getElementById("valor1");
  var valor2 = document.getElementById("valor2");
  var valor3 = document.getElementById("valor3");
  var valor4 = document.getElementById("valor4");

  valor1.innerText = "Nome: " + nomeDado;
  valor2.innerText = "Login: " + loginDado;
  valor3.innerText = "Email: " + emailDado;
  valor4.innerText = "Senha: " + senhaDado;
}
