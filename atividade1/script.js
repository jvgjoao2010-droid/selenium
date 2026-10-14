const botao = document.getElementById("cadastrar");

botao.addEventListener("click", function () {
    const produto = document.getElementById("produto").value;
    const preco = document.getElementById("preco").value;

    document.getElementById("resultado").innerText =
        produto + " - R$ " + preco;
});