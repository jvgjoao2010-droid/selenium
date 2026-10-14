const botao = document.getElementById("cadastrar");

botao.addEventListener("click", function () {
 const nome = document.getElementById("nome").value;
 const idade = document.getElementById("idade").value;
 document.getElementById("resultado").innerText =
 nome + " - " + idade;
});
