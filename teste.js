const { Builder, By, until } = require("selenium-webdriver");
async function executarTeste() {
 const driver = await new Builder()
 .forBrowser("chrome")
 .build();
 try {
 await driver.get("http://127.0.0.1:5500/index.html");
 const nome = await driver.findElement(By.id("nome"));
 const idade = await driver.findElement(By.id("idade"));
 const botao = await driver.findElement(By.id("cadastrar"));
 await nome.sendKeys("Carlos");
 await idade.sendKeys("20");
 await botao.click();
 const resultado = await driver.findElement(By.id("resultado"));
 const esperado = "Carlos - 20";
 await driver.wait(async () => {
 const texto = await resultado.getText();
 return texto.length > 0;
 }, 3000);
 const obtido = await resultado.getText();
 console.log("Resultado esperado:", esperado);
 console.log("Resultado obtido:", obtido);
 if (obtido === esperado) {
 console.log("TESTE APROVADO");
 } else {
 console.log("TESTE REPROVADO");
 }
 } finally {
 await driver.quit();}
}
executarTeste().catch(erro => {
 console.error("Erro na execução:", erro.message);
 process.exitCode = 1;
});