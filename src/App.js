import React, { Component } from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import News from './components/news';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
