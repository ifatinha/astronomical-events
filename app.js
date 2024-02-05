import chuvaMeteoros from "./data/chuva-de-meteoros.js";
import { chuvasDeMeteorosDeHoje, verificarChuvasFuturas } from "./eventos-astronomicos/eventos-astronomicos.js";
import imprimirDadosChuva from "./functions/imprimir-chuvas.js";

const chuvasHoje = chuvaMeteoros.filter(chuvasDeMeteorosDeHoje);

if (chuvasHoje.length > 0) {
    console.log(`Encontramos ${chuvasHoje.length} que podem ser vistas hojes:`);
    chuvasHoje.forEach(imprimirDadosChuva);
} else {
    console.log("Não há chuvas passando hoje".toUpperCase());
}

const chuvasFuturas = chuvaMeteoros.filter(verificarChuvasFuturas);
if (chuvasFuturas.length > 0) {
    console.log(`Não perca as próximas chuvas de meteoros:`);
    chuvasFuturas.forEach(imprimirDadosChuva);
} else {
    console.log("Não há chuvas previstas para os próximos 2 meses".toUpperCase());
}