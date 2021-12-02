import '../style/Footer.css';
import * as d3 from 'd3';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes as Switch,
    
} from 'react-router-dom';


class Footer extends Component{
render(){
    return(
    <footer>
        <h1>welkom</h1>
        <p> Dit is het project van mandemt. Een applicatie waar veel werk in zit. Je kunt hiermee een barchart uit lokale json data genereren of verfkleuren uit de rijksmuseum API visueel weergeven.
            Als je wilt deelnemen aan dit project kan dat via deze link: <a href="https://github.com/mandemt/tt-fa">frontend data mandemt</a>
        mandemt 2021 Frontend Aplications 
        </p>
    </footer>
    )
}

}

export default Footer
