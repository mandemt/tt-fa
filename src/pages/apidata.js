import React, {Component} from 'react';
import '../style/graph.css'
import * as d3 from 'd3';

import request from '../components/request.js'
 class API extends Component{
      render(){
         
        return(
            <>
            <input type="text" value="Rembrandt+van+Rijn"></input>
            <button  onClick={request}></button>
            <div>hoi</div>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>
            <rect className="dinges"></rect>


            </>
        )

 }

}

export default API