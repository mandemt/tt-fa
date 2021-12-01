import './style/Header.css';
import * as d3 from 'd3';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes as Switch,
    
} from 'react-router-dom';
import Grafiek from './graph.js'

class Header extends Component{
render(){
    return(
        <Router>
        <ul>
   <li>
     <Link to="/" >Home</Link>
   </li>
   <li>
     <Link to="/barchart">Bar chart</Link>
   </li>
   <li>
     <a href="https://github.com/mandemt/tt-fa/wiki">Wiki</a>
   </li>
   </ul>

 <Switch>
   <Route exact path='/barchart' element={<Grafiek/>}></Route>
   {/* <Route exact path='/contact' element={<Contact/>}></Route> */}
 </Switch>
</Router>


    )
}

}

export default Header
