import React, {Component} from 'react';
import './App.css';
import store from './store/store'

class App extends Component {

  onClickIncrement = () => {
    store.dispatch({type: 'INCREMENT'});
  };
  onClickDecrement = () => {
    store.dispatch({type: 'DECREMENT'});
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
