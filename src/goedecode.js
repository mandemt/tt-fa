// import logo from './logo.svg';
import './App.css';
// import Barchart from './components/Barchart.js'
import * as d3 from 'd3';
import data from './components/data'
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes as Switch,
    
} from 'react-router-dom';
import Home from './components/Home.js'

import Contact from './components/Contact.js'

function halloDaar() {
    const margin = { top: 50, bottom: 50, left: 150, right: 50 }; // marges om op de grafiek toe te passen
    const width = 500 - margin.left - margin.right; // breedte
    const height = 500 - margin.top - margin.bottom; // hoogte
    const svg = d3.select('main') // selecteer <main> element uit html
        .append('svg')  // het canvas voor de bar chart
        .attr('width', width + margin.left + margin.right) // de breedte van het svg element
        .attr('height', height + margin.top + margin.bottom); // de hoogte van het svg element

    const groep = svg.append('g')  // maak nieuw group element aan waar alle bars in zitten
        .attr('transform', `translate(${margin.left},${margin.top})`); // positionering van het group element

    svg.append("text")
        .attr("transform", "translate(10,250)rotate(90)") // 90 graden draaien en aan de zijkant van de bar chart zetten
        .style("text-anchor", "middle") // tekst moet in het midden staan
        .text('Variabele'); // tekst

    svg.append("text")
        .attr("transform", "translate(300,20)")
        .style("text-anchor", "middle")
        .text("Aantal keer voorgekomen in enquete");


    const xscale = d3.scaleLinear().range([0, width]); // over hoeveel pixels de bar width verdeeld worden
    const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1); // over hoeveel pixels de bar height verdeelt worden met tussenruimte

    const xaxis = d3.axisTop().scale(xscale); // de horizontale as maken zodat er ook lijnen komen te staan
    const g_xaxis = groep.append('g').attr('class', 'x axis'); // deze as wordt een group met door d3 geintegreerde elementen zoals ticks en getallen

    const yaxis = d3.axisLeft().scale(yscale); // de verticale as  met getallen aan de linkerkant
    const g_yaxis = groep.append('g').attr('class', 'y axis');


    d3.select('select') // selecteer het HTML element <select> (ook wel het filter)
        .on('change', function () { // als er verandering wordt aangebracht
            telData(this.value)
        })


    function telData(invoer) {
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


    function netteData(counts) {
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
    }


function update(new_data) { // updaten van de data

    xscale.domain([0, d3.max(new_data, (d) => d.keer)]); // over welke getallen de bars verdeeld moeten worden
    yscale.domain(new_data.map((d) => d.getal)); // hoeveel bars er moeten zijn
    g_xaxis.transition().call(xaxis); // soepele overgang en de as aanpassen op de nieuwe data
    g_yaxis.transition().call(yaxis);

    const rect = groep.selectAll('rect').data(new_data).join( // omvat de gebeurtenissen met de data 

        (enter) => { //  alle data die nog niet gevisualiseerd is en gemaakt moet worden

            const rect_enter = enter.append('rect').attr('x', 0); // zorg dat de bar een <rect> element is die 0 pixels van de x as staat
            return rect_enter;

        },
        (update) => update,
        // wat er gebeurd met de elementen die er al waren
        (exit) => {

            return exit.remove()
        }// elementen die verdwenen zijn moeten uit de visualisatie gehaald worden met exit

    );

    rect.transition() // De animatie om soepeler de verandering weer te geven
        .attr('height', yscale.bandwidth()) // hoe hoog de balk is ten opzichte van de andere data
        .attr('width', (d) => xscale(d.keer)) // de breedte van de balk
        .attr('y', (d) => yscale(d.getal)) // de balk kom te staan bij de variabele
}
}


function Chart() {


    return (
        <body>

            <h1>Bar chart mandemt</h1>
            <div id="filter">
                <button onClick={halloDaar}>maak grafiek</button>
                <h3>Filter hoe vaak iets mag voorkomen:</h3>
                <label id="range">
                    <p>0</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                </label>

                <input type="range" min="0" max="10" defaultValue='5' ></input>

                <select name="filter">
                    <option value="zin" selected>Hoeveel zin heb je in de techtrack?</option>
                    <option value="verdieping">Op welke verdieping studeer je het liefste?</option>
                    <option value="zuivelproduct">Wat is je favoriete zuivelproduct?</option>
                    <option value="oogkleur">Wat is je oogkleur?</option>
                    <option value="dier">Wat is je favoriete huisdier?</option>
                </select>

            </div>
            <main> </main>
        </body>
    )
}

export default Chart;