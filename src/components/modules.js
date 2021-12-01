import data from '../components/data'
import {netteData} from './netteData.js'

export  function telData(invoer) {
    let count = [] // nieuwe array met alle geselecteerde antwoorden uit de dataset
    const counts = [] // nieuwe array met alle getelde geselecteerde antwoorden

    data.forEach((filter, index) => { // ga door alle regels in het .json bestand heen
        const variable = data[index][invoer] // zoek de variabelen die voldoen aan de waarde die is aangegeven in <select>
        count.push(variable) // zet alleen deze vragen in een lege array
    })

    count.forEach(function (x) { // neem elke regel uit deze array appart
        counts[x] = (counts[x] || 0) + 1; // voor iedere keer dat iets voorkomt, wordt de waarde +1
    });

    netteData(counts)
}

