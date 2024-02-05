let dataAtual = new Date("2023-03-25");

function chuvasDeMeteorosDeHoje(chuva) {

    const dataInicio = new Date(chuva.inicio + "/" + dataAtual.getFullYear());
    const dataFim = new Date(chuva.fim + "/" + dataAtual.getFullYear());

    if (dataInicio.getMonth() > dataFim.getMonth()) {
        dataFim.setFullYear(dataFim.getFullYear() + 1);
    }

    if (dataAtual.getTime() >= dataInicio.getTime() && dataAtual.getTime() <= dataFim.getTime()) {
        return chuva;
    }
}

function verificarChuvasFuturas(chuva) {
    let dataFutura = new Date("2023-03-25");
    dataFutura.setMonth(dataFutura.getMonth() + 2);
    let dataInicioChuva = new Date(chuva.inicio + "/" + dataAtual.getFullYear());

    if (dataAtual.getMonth() > dataInicioChuva.getMonth()) {
        dataInicioChuva.setFullYear(dataAtual.getFullYear() + 1);
    }

    if (dataAtual.getTime() < dataInicioChuva.getTime() && dataInicioChuva.getTime() < dataFutura.getTime()) {
        return chuva;
    }
}

export { chuvasDeMeteorosDeHoje, verificarChuvasFuturas };