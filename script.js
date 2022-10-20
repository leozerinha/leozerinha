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
        botao.style.color = "red";
        botao.addEventListener("click", function() {
            divNova.remove();
        });
        divNova.appendChild(check);
        check.addEventListener("change", function() {
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
}

function exibir() {
    document.getElementById("cad").style.display = "none";
    document.getElementById("tarefas").style.display = "block";
}

document.addEventListener("keypress", function (e) {
    if(e.key ==="Enter"){
        const button = document.querySelector(".button");
        
        button.click();

    }
});