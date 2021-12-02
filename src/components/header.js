import '../style/Header.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as Switch,

} from 'react-router-dom';
import Grafiek from '../pages/grafiek.js'
import API from '../pages/apidata.js'

class Header extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/barchart">Bar chart</Link>
          </li>
          <li>
            <Link to="/apidata">API data</Link>
          </li>
          <li>
            <a href="https://github.com/mandemt/tt-fa/wiki">Wiki</a>
          </li>
        </ul>

        <Switch>
          <Route exact path='/barchart' element={<Grafiek />}></Route>
          <Route exact path='/apidata' element={<API />}></Route>
        </Switch>
      </Router>
    )
  }

}

export default Header
