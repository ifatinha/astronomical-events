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

function exibirCabecalho() { }

function imprimirDadosChuva(chuva) {
    let cabecalho = "Nome da chuva".padEnd(5, " ");
    console.log(cabecalho);
}

export default imprimirDadosChuva;