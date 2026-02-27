function calcular() {
    const consumo = Number(document.getElementById("consumo").value);
    const valorConta = Number(document.getElementById("valorConta").value);
    const custoSistema = Number(document.getElementById("custoSistema").value);

    if (!consumo || !valorConta || !custoSistema) {
        alert("Preencha todos os campos!");
        return;
    }

    const economiaMensal = valorConta * 0.9;
    const economiaAnual = economiaMensal * 12;
    const retorno = custoSistema / economiaMensal;

    document.getElementById("resultado").innerHTML =
        `Economia mensal: R$ ${economiaMensal.toFixed(2)} <br>
        Economia anual: R$ ${economiaAnual.toFixed(2)} <br>
        Retorno do investimento: ${retorno.toFixed(1)} meses`;
}