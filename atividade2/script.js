const botao = document.getElementById("salvar");

botao.addEventListener("click", function () {
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    document.getElementById("resultado").innerText =
        modelo + " - " + ano;
});