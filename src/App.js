import React, { Component } from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
//ACTION
import {LOCATION_NEWS, LOCATION_HOME} from "./action_types";
//COMPONENTS
import Home from './components/home';
import News from './components/news';
import store from './store';

class App extends Component {
  onClickHome = () => {
    store.dispatch({type: LOCATION_HOME});
  };
  onClickNews = () => {
    store.dispatch({type: LOCATION_NEWS})
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <li>
            <Link to="/" onClick={this.onClickHome}>HOME</Link>
          </li>
          <li>
            <Link to="/news" onClick={this.onClickNews}>NEWS</Link>
          </li>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
