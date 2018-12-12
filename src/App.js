import React, {Component} from 'react';
import './App.css';
import store from './store/store';
import {increment, decrement} from './actions/actions';
import { connect } from "react-redux";

class App extends Component {


  onClickIncrement = () => {
    store.dispatch({type: 'INCREMENT'});
    console.log(store.getState());
  };

  onClickDecrement = () => {
    store.dispatch({type: 'DECREMENT'});
    console.log(store.getState());
  };

  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <button onClick={this.onClickIncrement}>INCEREMENT</button>
        <button onClick={this.onClickDecrement}>DECREMENT</button>
      </div>
    );
  }
}

export default App;
