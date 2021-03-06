import { image } from "d3-fetch";
import { render } from "ejs";
import * as d3 from 'd3';
import {API_KEY} from './apikey.js'
export default function request() {
let request = new XMLHttpRequest(); // de aanvraag naar de data van de API wordt aangevraagd 
let input = document.querySelector('input')
let apiKey = API_KEY
let id = input.value
request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection?key=' + apiKey + '&involvedMaker=' + id) // De link naar de API. Een verschillend id zorgt voor andere resultaten.
request.onload = function () { // Als het request wordt uitgevoerd zal deze anonieme functie worden uitgevoerd.
    let data = JSON.parse(request.response); // string uit de API wordt omgezet als JS object
    let kleuren = data.facets[6].facets; // Ik haal de specifieke variabele uit de kunstenaar uit id.
console.log(kleuren)
console.log(data)
let allekleuren = []
    kleuren.forEach(kleur => { // Er wordt over alle (10) kunstwerken heengegaan
        allekleuren.push(kleur.key)
        })
   let vierkant1 =    document.querySelector('.dinges:first-of-type')
   let vierkant2 =    document.querySelector('.dinges:nth-of-type(2)')
   let vierkant3 =     document.querySelector('.dinges:nth-of-type(3)')
   let vierkant4 =     document.querySelector('.dinges:nth-of-type(4)')
   let vierkant5 =     document.querySelector('.dinges:nth-of-type(5)')
    
   const squares = [vierkant1,vierkant2,vierkant3,vierkant4,vierkant5]

 allekleuren.slice(-5).forEach((kleur, i) => {
     squares[i].style.backgroundColor = kleur
 })
}
request.send() // De aanvraag wordt verstuurd.
console.log(request)
}

