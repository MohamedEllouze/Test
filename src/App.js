import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Product from './Product'
import Products from './Products'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    }
  }

 
  render() {
    return (
      <div className="App">
        <Router>
        <Route exact path={"/"} render ={()=><Products/>}/>
        
        
        <Switch>
        <Route path= '/products/:id' render={(props)=><Product id={props.match.params.id}/>}/>

        
        </Switch>
        </Router>
      </div>);
  }
}

export default App;


