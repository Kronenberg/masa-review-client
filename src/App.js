import React, {Component} from 'react';
import './App.css';
import {} from './redux/actions/actions';
import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>APP redux ready</h1>

      </div>
    );
  }
}


// THIS METHODS BELOW HAVE TO BE IN EVERY COMPONENT FILE IF ACCESS TO REDUX STORE NEEDED
const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
