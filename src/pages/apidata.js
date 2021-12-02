import React, {Component} from 'react';
import '../style/graph.css'
import * as d3 from 'd3';

import request from '../components/request.js'
 class API extends Component{
      render(){
         
        return(
            <>
            <div className="squares">

            <input type="text"></input>
            <button  onClick={request}>Bekijk verfkleuren</button>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            </div>

            </>
        )

 }

}

export default API