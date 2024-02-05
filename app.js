import chuvaMeteoros from "./data/chuva-de-meteoros.js";
import { chuvasDeMeteorosDeHoje, verificarChuvasFuturas } from "./eventos-astronomicos/eventos-astronomicos.js";
import { exibirCabecalho, imprimirDadosChuva } from "./functions/imprimir-chuvas.js";

const chuvasHoje = chuvaMeteoros.filter(chuvasDeMeteorosDeHoje);

if (chuvasHoje.length > 0) {
    console.log(`Encontramos ${chuvasHoje.length} chuva(s) que pode(m) ser vistas hojes:\n`.toUpperCase());
    console.log(exibirCabecalho());
    chuvasHoje.forEach(imprimirDadosChuva);
} else {
    console.log("\nNão há chuvas passando hoje".toUpperCase());
}

const chuvasFuturas = chuvaMeteoros.filter(verificarChuvasFuturas);
if (chuvasFuturas.length > 0) {
    console.log(`\nNão perca as próximas chuvas de meteoros:\n`.toUpperCase());
    console.log(exibirCabecalho());
    chuvasFuturas.forEach(imprimirDadosChuva);
} else {
    console.log("\nNão há chuvas previstas para os próximos 2 meses".toUpperCase());
}