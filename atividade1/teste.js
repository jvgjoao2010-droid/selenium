const { Builder, By } = require("selenium-webdriver");

async function executarTeste() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("http://127.0.0.1:5500/index.html");

        await driver.findElement(By.id("produto"))
            .sendKeys("Teclado");

        await driver.findElement(By.id("preco"))
            .sendKeys("150");

        await driver.findElement(By.id("cadastrar"))
            .click();

        const resultado = await driver
            .findElement(By.id("resultado"))
            .getText();

        const esperado = "Teclado - R$ 150";

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