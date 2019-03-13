import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>{this.props.age}</h1>
       <button onClick={this.props.onAgeUp}>Add</button>
       <button onClick={this.props.onAgeDown}>Substract</button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    age: state.age
  }
}

const mapDispachToProps = (dispach) =>{
return {
  onAgeUp:()=> dispach({type:'AGE_UP'}),
  onAgeDown: () =>dispach({type:'AGE_DOWN'})
}
}

export default connect(mapStateToProps,mapDispachToProps)(App);
