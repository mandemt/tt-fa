import React, {Component} from 'react';
import {halloDaar} from '../components/teldata.js'
import '../style/graph.css'
class Grafiek extends Component{
    render(){

return(
    <>
    <h1>Bar chart mandemt</h1>

    <div className="graph">
    <div id="filter">
        <button onClick={halloDaar} value="hoi">maak grafiek</button>
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
<main>
    </main>
    </div>
    </>

)
}
    }


export default Grafiek;