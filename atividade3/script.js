const botao = document.getElementById("cadastrar");

botao.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;

    document.getElementById("resposta").innerText =
        nome + " - " + cargo;
});