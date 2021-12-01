import {update} from './updateData.js'
import * as d3 from 'd3'
export  function netteData(counts) {
    let geteldeArray = [] // nieuwe array om met bijbehorende labels zodat ook string gebruikt kan worden

    let getal = Object.keys(counts) // de variabelen
    let waarde = Object.values(counts) // de waarden

    getal.forEach((x, index) => { // van alle variabelen

        const aantal = waarde[index]; // hoevaak het voorkomt is de waarde van de variabele

        geteldeArray.push({
            "getal": x, "keer": aantal // in de nieuwe array wordt de data netjes gepresenteerd
        })
    })
    update(geteldeArray) // update met de bijbehorende  data

    d3.select('input[type="range"]') //  slider html element
        .on('change', function () { // als dit veranderd
            filterData(this.value, geteldeArray)
        });
}
function filterData(bereik, arr) {
    const filtered_data = arr.filter((d) => d.keer >= bereik) // filter door de array naar variabelen met een .keer boven de frequentie
    update(filtered_data); // gebruik deze data voor de nieuwe bar chart
    console.log(filtered_data)
}