function formataIntensidade(string) {
    let intensidade = "";
    let aux = string.split(" ");

    switch (aux[0]) {
        case "Fraca":
            intensidade = "1 (Fraca)";
            break;

        case "Média":
            intensidade = "2 (Média)";
            break;

        case "Forte":
            intensidade = "3 (Forte)";
            break;

        case "Irregular":
            intensidade = "4 (Irregular)";
            break;

        default:
            intensidade = "1 (Fraca)";
            break;
    }

    return intensidade;
}

function formatarHemisferio(local) {
    let declinacao;

    if (local > 0) {
        declinacao = "Norte";
    } else {
        declinacao = "Sul"
    }

    return declinacao;
}

function formatarData(data) {
    let dataFormatada = data.split("/");
    return dataFormatada[1] + "/" + dataFormatada[0];
}

function exibirCabecalho() {
    let nome = "NOME DA CHUVA".padEnd(30, " ");
    let intensidade = "- intensidade - hemisfério - período";

    return (nome + intensidade).toUpperCase();
}

function imprimirDadosChuva(chuva) {
    let chuvaNome = chuva.nome.padEnd(29, " ");
    let intensidade = formataIntensidade(chuva.intensidade).padEnd(11, " ");
    let hemisferio = formatarHemisferio(chuva.declinacao).padEnd(10, " ");
    let dataInicio = formatarData(chuva.inicio);
    let dataFim = formatarData(chuva.fim);
    let periodo = dataInicio + " à " + dataFim;

    console.log(chuvaNome + " - " + intensidade + " - " + hemisferio + " - " + periodo);
}

export { exibirCabecalho, imprimirDadosChuva };