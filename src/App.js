import React, {Component} from 'react';
import './App.css';
import Form from './components/form/'
import 'bootstrap/dist/css/bootstrap.css';
import formValidator from './tools/formValidator';

class App extends Component {

    constructor() {
        super();

        this.state = {
            inputName: '',
            inputSurName: '',
            inputEmail: '',
            inputPass: '',
            inputConPass: '',
            formValid: false
        }
    };

    _onChangeInputName = (e) => {
        const {value} = e.target;
        this.setState({inputName: value});
    };

    _onChangeInputSurname = (e) => {
        const {value} = e.target;
        this.setState({inputSurName: value});
    };

    _onChangeInputEmail = (e) => {
        const {value} = e.target;
        this.setState({inputEmail: value});
    };

    _onChangeInputPass = (e) => {
        const {value} = e.target;
        this.setState({inputPass: value});
    };

    _onChangeInputConPass = (e) => {
        const {value} = e.target;
        this.setState({inputConPass: value});
    };

    componentDidUpdate(prevProps, prevState) {
        let a = false;
        const { inputConPass, inputPass, inputName, inputEmail, inputSurName} = this.state;

        a = formValidator(inputConPass, inputPass, inputName, inputEmail, inputSurName);

        if ((!prevState.formValid && a) || (prevState.formValid && !a)) {
            this.setState({
                formValid: a
            })
        }
    }
    render() {

        // console.log(this.state);
        return (
            <div className="App">
                <Form
                    inputName={this.state.inputName}
                    inputSurName={this.state.inputSurName}
                    inputEmail={this.state.inputEmail}
                    inputPass={this.state.inputPass}
                    inputConPass={this.state.inputConPass}
                    change1={this._onChangeInputName}
                    change2={this._onChangeInputSurname}
                    change3={this._onChangeInputEmail}
                    change4={this._onChangeInputPass}
                    change5={this._onChangeInputConPass}
                    nameValid={this.state.nameValid}
                    formValid={this.state.formValid}
                />
            </div>
        );
    }
}

export default App;
