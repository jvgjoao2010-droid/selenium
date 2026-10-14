const { Builder, By } = require("selenium-webdriver");

async function executarTeste() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("http://127.0.0.1:5500/index.html");

        await driver.findElement(By.id("nome"))
            .sendKeys("Mariana");

        await driver.findElement(By.id("cargo"))
            .sendKeys("Analista");

        await driver.findElement(By.id("cadastrar"))
            .click();

        const resultado = await driver
            .findElement(By.id("resposta"))
            .getText();

        const esperado = "Mariana - Analista";

        console.log("Esperado:", esperado);
        console.log("Obtido:", resultado);

        if (resultado === esperado) {
            console.log("TESTE APROVADO");
        } else {
            console.log("TESTE REPROVADO");
        }

    } catch (erro) {
        console.log("Erro:", erro.message);
    }

    console.log("Chrome aberto. Pressione Ctrl+C para encerrar.");
    await new Promise(() => {});
}

executarTeste();