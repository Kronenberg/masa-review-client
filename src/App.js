import React, { Component } from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
//ACTION
import { updateLocation } from "./actoin/action";
//COMPONENTS
import Home from './components/home';
import News from './components/news';
import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
  }
  onClickLink = (value) => {
    this.props.updateLocation(value)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>LOCATION: {this.props.navigation.location}</h1>
          <li>
            <Link to="/" onClick={()=> {this.onClickLink('home')}}>HOME</Link>
          </li>
          <li>
            <Link to="/news" onClick={()=> {this.onClickLink('news')}}>NEWS</Link>
          </li>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
  navigation: state.locationReducer
  };
};
const mapDispatchToProps = dispatch => ({
  updateLocation: (value) => dispatch(updateLocation(value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);